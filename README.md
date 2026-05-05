# BNI 富聯白金分會官網（bnifl）

> bnifl.ugomk.com — BNI Fulian Platinum Chapter, Kaohsiung

## 技術棧
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3.4 自訂設計系統
- Framer Motion 動效
- Lucide Icons
- 靜態資料層（lib/data/*）

## 開發
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 產生 production build
npm start        # 啟動 production server
```

## 專案結構
```
app/                Next.js App Router 頁面
  page.tsx          首頁
  about/            關於富聯
  members/          會員專區（含 [slug] 個人頁）
  results/          引薦戰績
  news/             最新消息（含 [slug] 內頁）
  visit/            訪客預約
  contact/          聯絡我們
  api/              後端 API（visit、contact）
components/         共用元件
  ui/               基礎 UI 元件（Section、Counter、Reveal、MemberCard、NewsCard）
lib/
  data/             資料來源（會員、新聞、戰績、產業、站台設定）
  utils.ts          工具函式
public/             靜態資源
```

## 內容更新
所有可動態更新的資料集中於 `lib/data/` 資料夾：
- `site.ts` — 站台基本資訊（聯絡方式、例會時間、累計戰績）
- `members.ts` — 會員名單
- `industries.ts` — 產業分類
- `news.ts` — 最新消息
- `results.ts` — 引薦案例與月度戰績

## 設計系統
- 主色：`ink` (深夜藍 #0B1426)
- 強調色：`platinum` (鉑金 #C9B47C)
- 底色：`pearl` (珍珠白 #FAFAF7)
- 字體：Noto Sans TC + Noto Serif TC + Playfair Display + Inter

## 部署
推送至 GitHub 後，Zeabur 自動建置與部署，並綁定 `bnifl.ugomk.com` 子網域。

## 後續整合計畫
- [ ] `/api/visit` `/api/contact` 接 Email / LINE Notify / Google Sheet
- [ ] 會員資料從 Excel 匯入（CSV → `lib/data/members.ts`）
- [ ] LIFF 整合：訪客預約直接走 LINE OA
- [ ] CMS 後台（給秘書用，選配）
