FROM node:20-slim
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# next/image 圖片最佳化要 sharp；Next 14 不自帶，沒有就走 WASM 備援（11-04 GCP 上 1920 寬每張 2～22 秒）。
# 裝在 app 依賴樹外面（不動 package.json／lock），用 NEXT_SHARP_PATH 指過去。
# node:20-slim 是 glibc → npm 會拉 @img/sharp-linux-x64 預編譯版。
RUN mkdir -p /opt/sharp && cd /opt/sharp && npm init -y >/dev/null \
  && npm install --no-audit --no-fund sharp@0.33.5 \
  && node -e "require('/opt/sharp/node_modules/sharp')"
ENV NEXT_SHARP_PATH=/opt/sharp/node_modules/sharp

# Install all deps (including devDeps for build tools)
COPY package.json package-lock.json ./
RUN npm ci --include=dev

COPY . .

# Build with NODE_ENV=production so React/Next bundles prod runtime
ENV NODE_ENV=production
RUN npm run build && mkdir -p /app/.next/cache/images

ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000

CMD ["./node_modules/.bin/next", "start", "-H", "0.0.0.0", "-p", "3000"]
