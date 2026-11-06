FROM node:20-slim
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# Install all deps (including devDeps for build tools)
# next/image 圖片最佳化要 sharp（沒有就走 WASM 備援，11-04 GCP 上 1920 寬每張 2～22 秒）。
# Next 15 起 sharp 是 next 的 optionalDependency，跟著 package-lock.json 由 npm ci 裝進 app 依賴樹；
# Next 直接 require('sharp')、不再讀 NEXT_SHARP_PATH → 11-04 的 /opt/sharp 做法拿掉。
# 版本由 package.json 的 overrides 釘死 0.35.5（GHSA-2464-fhr4-w9xw 官方 workaround）；
# Next 15.5.28 起 image-optimizer 另用 sharp.block() 限制解碼器，兩層一起。
# node:20-slim 是 glibc → 拉 @img/sharp-linux-x64 預編譯版（lock 內已含各平台 optional 套件）。
COPY package.json package-lock.json ./
RUN npm ci --include=dev

# 建置期自檢：從 next 的位置解析 sharp（＝執行期 Next 實際載入的那份），版本不對、
# 或圖片最佳化會用到的 rotate／resize／webp 呼叫壞掉就讓建置失敗，不讓壞映像上線。
RUN node -e "const p=require.resolve('sharp',{paths:[require.resolve('next/package.json')]}); const s=require(p); if (s.versions.sharp !== '0.35.5') { console.error('sharp 版本不對', p, s.versions); process.exit(1) } s({create:{width:64,height:64,channels:3,background:'#fff'}}).png().toBuffer().then((b)=>s(b,{sequentialRead:true}).rotate().resize(32,undefined,{withoutEnlargement:true}).webp({quality:75}).toBuffer()).then((o)=>s(o).metadata()).then((m)=>{ if (m.format !== 'webp' || m.width !== 32) process.exit(1); console.log('sharp ok', p, s.versions.sharp, 'libvips', s.versions.vips) }).catch((e)=>{ console.error(e); process.exit(1) })"

COPY . .

# Build with NODE_ENV=production so React/Next bundles prod runtime
ENV NODE_ENV=production
RUN npm run build && mkdir -p /app/.next/cache/images

ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000

CMD ["./node_modules/.bin/next", "start", "-H", "0.0.0.0", "-p", "3000"]
