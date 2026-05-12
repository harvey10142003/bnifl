# BNI 富聯白金分會 ─ 企業識別系統（CIS）

> 本文件為網站、印刷物、社群素材的設計準則。
> 任何視覺修改必須先對齊本文件，遇到本文件未涵蓋的情境，先在 PR 內討論再更新本文件。

最後更新：2026-05-06

---

## 1. 品牌核心

| 項目 | 內容 |
|---|---|
| 中文名 | BNI 富聯白金分會 |
| 英文名 | BNI Fulian Platinum Chapter |
| 簡稱 | 富聯白金 / Fulian |
| 品牌精神 | Givers Gain®（付出者收穫） |
| Tagline | 在地深耕．國際串聯．只有合作，沒有競爭 |
| 屬地 | 高雄 |

### 品牌個性
- **可靠**（reliable）：穩重、信任、不浮誇
- **連結**（connected）：人與人、產業與產業之間的網絡
- **長青**（enduring）：商業關係要走十年以上
- **平等**（equal）：每位會員一席，無階級分層

---

## 2. Logo

### 主視覺
| 版型 | 檔案 | 使用情境 |
|---|---|---|
| 橫式 lockup | `public/images/logo-horizontal.png` | Header、信頭、社群封面 |
| 直式 lockup | `public/images/logo-vertical.png` | Favicon、OG 預覽圖、印刷主視覺 |

### 安全留白
- 四周至少留 logo 高度的 **1/3** 作為淨空區
- 不可在淨空區放置其他文字或圖形

### 最小尺寸
- 螢幕：高度不得小於 **32 px**
- 印刷：高度不得小於 **8 mm**

### 不可
- 拉伸、變形、改色、加陰影、加描邊
- 放在低對比背景（如品牌深藍上不放原色版，需用反白版）
- 與其他 logo 同時並列時不得縮得比對方小

---

## 3. 色彩系統

> 所有顏色必須使用 Tailwind tokens（`tailwind.config.ts` 中已定義），**禁止寫死 hex**。

### 主色（Primary）

| Token | Hex | 用途 |
|---|---|---|
| `ink-700` | `#1F2D3D` | 字體主色、深色背景、邊框深色 |
| `teal-500` | `#4F9DA0` | 主 CTA 按鈕、強調連結、強調數字 |
| `pearl` | `#FAFAF7` | 主背景、深色背景上的反白文字 |

### 完整 ink（深藍）色階
`ink-50 #F4F6F8` → `ink-100 #E2E7ED` → `ink-300 #94A3B5` → `ink-500 #475A72` → **`ink-700 #1F2D3D`** → `ink-900 #0F1A28`

### 完整 teal（青綠）色階
`teal-50 #EDF6F6` → `teal-100 #D4EAEB` → `teal-300 #7CBEC1` → `teal-400 #4F9DA0` → **`teal-500 #408588`** → `teal-700 #285255`

### 別名
- `platinum-X` 是 `teal-X` 的別名（為相容歷史程式碼），新元件**請統一使用 teal**

### 配色組合（必背）
- **內文卡片**：`bg-pearl` + 文字 `text-ink-700` + 邊框 `border-ink-100`
- **深色 CTA 區**：`bg-ink-700` + 文字 `text-pearl` + 強調 `text-teal-300`
- **強調按鈕**：`bg-teal-500` + 文字 `text-pearl`
- **次要按鈕**：`border border-ink-700` + 文字 `text-ink-700`

### 對比度
所有正文文字必須符合 WCAG AA（≥ 4.5:1），標題文字 ≥ 3:1。

---

## 4. 字體（Typography）

### 字型家族
| 家族 | 來源 | 用途 |
|---|---|---|
| Noto Sans TC | Google Fonts（自動載入） | 中文 — 全部 |
| Inter | Google Fonts（自動載入） | 英文 — 全部 |

> **不使用襯線體**（Serif）。logo 是黑體，整體視覺一致性以黑體為主。

### 字重使用
| 字重 | 用途 |
|---|---|
| `font-black` (900) | 主視覺 / 大標題（h1, h2, display-X） |
| `font-bold` (700) | 子標題 / 卡片標題（h3, h4） |
| `font-semibold` (600) | 按鈕、徽章 |
| `font-medium` (500) | 強調、eyebrow |
| `font-normal` (400) | 內文 |

### 字級系統（Tailwind tokens）
| Token | 值 | 用途 |
|---|---|---|
| `text-display-xl` | clamp(3rem, 7vw, 6.5rem) | Hero 主標 |
| `text-display-lg` | clamp(2.5rem, 5vw, 4.5rem) | 章節主標 |
| `text-display-md` | clamp(2rem, 3.5vw, 3rem) | 區塊標 |
| `text-display-sm` | clamp(1.5rem, 2.5vw, 2.25rem) | 子區塊標 |
| `text-base` | 16px | 內文 |
| `text-lg` / `text-xl` | 18-20px | 段落引文 |

### 字距
- 中文不調 letter-spacing
- 英文 uppercase 用 `tracking-wider` 或 `tracking-widest-2`（0.25em）

---

## 5. 元件樣式（Component System）

### 按鈕（Button）
- **形狀**：一律 `rounded-full`（pill）
- **內距**：`px-6 py-3`
- **字重**：`font-semibold`
- **大小寫**：英文 uppercase + `tracking-wider`

| Class | 樣式 | 何時用 |
|---|---|---|
| `.btn-teal` | teal-500 底 + pearl 字 | **主 CTA**（預約參訪、送出表單） |
| `.btn-primary` | ink-700 底 + pearl 字 | 次要主要動作 |
| `.btn-outline` | ink-700 邊框 + ink-700 字 | 第三層動作 |
| `.btn-ghost` | 純透明 + ink-700 字 | 連結式按鈕 |

### 卡片（Card）
- **圓角**：`rounded-2xl`（16px）
- **背景**：`bg-pearl` 或 `bg-pearl-200`
- **邊框**：`border border-ink-100`
- **Hover**：邊框轉 `border-teal-300` + 過場 500ms

| Class | 用途 |
|---|---|
| `.card-elevated` | 主互動卡片（會員、消息） |
| `.card-flat` | 非互動展示卡片（FAQ、欄位群組） |
| `.card-dark` | 深色卡片（CTA 區） |
| `.card-feature` | 功能格（4 大價值、4 大期待） |

### 徽章 / 標籤（Badge）
- **圓角**：`rounded-full`
- **內距**：`px-3 py-1`
- **字級**：`text-[11px]` + `tracking-widest-2 uppercase`

| Class | 用途 |
|---|---|
| `.badge-teal` | 角色標籤、產業標籤 |
| `.badge-pearl` | 在深色背景上的標籤 |
| `.badge-outline` | 中性標籤、計數 |

### 媒體框（Media Frame）
- **圓角**：主圖 `rounded-2xl`，小圖 `rounded-xl`
- **比例**：人物用 `aspect-[4/5]`、橫式內容用 `aspect-[16/10]` 或 `aspect-[2/1]`
- **過場**：hover scale 1.05 / duration-700

### 表單（Form）
- 輸入框：`rounded-lg`（8px）+ `border border-ink-200`
- Focus：邊框轉 `border-teal-500`
- Placeholder：`text-ink-300`
- 必填星號：`text-teal-700`

### Icon 容器
- 方形 icon：`rounded-xl`（12px）
- 圓形 icon（社群、頭像）：`rounded-full`

---

## 6. 圓角系統（Radius Token）

| Token | 值 | 用途 |
|---|---|---|
| `rounded-lg` | 8px | 輸入框、小標籤 |
| `rounded-xl` | 12px | 小卡片、icon 容器 |
| `rounded-2xl` | 16px | **主要卡片**（最常用） |
| `rounded-3xl` | 24px | 大型 Hero 區塊（保留少用） |
| `rounded-full` | 9999px | 按鈕、徽章、頭像 |

> **絕對不要直角**（`rounded-none`）。如果某個元件目前沒圓角，那是 bug，不是設計選擇。

---

## 7. 排版規範（Layout）

### 容器
- 最大寬度：`1280px`（已於 `.container-bnifl` 統一）
- 左右內距：行動 `px-6` / 桌機 `px-10` / 大螢幕 `px-16`

### 區塊間距（vertical rhythm）
- Section 之間：`py-20 md:py-28 lg:py-32`（80–128px）
- Section header 與內容：`mb-14 md:mb-20`
- 卡片網格：`gap-6` 或 `gap-px`（無縫格線）

### 對齊
- 標題：左對齊或置中（看 SectionHeader 的 align prop）
- CTA 按鈕：跟標題反向（左標題 → 右按鈕）
- 段落：`leading-relaxed`（1.625）

---

## 8. 動效（Motion）

### 過場（Transition）
| 場景 | 設定 |
|---|---|
| 按鈕 hover | `duration-300 ease-out` |
| 卡片邊框 hover | `duration-500 ease-out` |
| 圖片 hover scale | `duration-700` |

### 進場（Reveal on Scroll）
- 統一使用 `<Reveal>` 元件（`components/ui/Reveal.tsx`）
- 預設：opacity 0→1，translateY 32px→0，duration 700ms
- 緩動：`cubic-bezier(0.16, 1, 0.3, 1)`

### 計數器
- 統一使用 `<Counter>` 元件
- 預設 1800ms easeOutCubic
- 觸發：進入 viewport 時自動執行（once）

---

## 9. 內容語調（Voice & Tone）

### 中文撰寫原則
- **白話**：把「進行最佳化」寫成「優化」、把「實施」寫成「做」
- **直接**：先講結論，再講原因
- **有溫度**：用「我們」「你」（少用「您」，除非客戶後台介面）
- **數字精準**：2.85 億、1240 筆、50 位（不寫「百萬」這種模糊）
- **避免**：誇張形容詞（「最強」「業界第一」）、空口號（「我們改變世界」）、硬翻譯英文（「leverage」翻「槓桿化」）

### 三種人稱使用情境
| 情境 | 使用 |
|---|---|
| 訪客專區、行銷文案 | 「你」 |
| 公司簡介、官方文件 | 「我們」 |
| 客戶後台、會員管理 | 「您」 |

### 英文標籤（Eyebrow）
- 全 uppercase + `tracking-widest-2`
- 用簡單動詞或名詞片語：`OUR PHILOSOPHY` `LATEST INSIGHTS` `JOIN US`
- 避免句子或長片語

---

## 10. 圖片規範

### 攝影風格
- 自然光優先
- 商業情境（會議、簽約、交流），不要過度擺拍
- 人物照：誠懇的微笑，不要尷尬笑
- 主體比例：人物 70% 以上、空間 30%

### 比例與尺寸
- 卡片大圖：`aspect-[4/5]`（直幅人像）
- 文章封面：`aspect-[16/10]`
- 全寬橫圖：`aspect-[2/1]`

### 圖片來源優先順序
1. 真實活動照（會員提供）
2. 委託攝影
3. Unsplash 高品質商業圖（最後手段）

---

## 11. 維護規則（Maintenance）

### 改顏色
- 改 `tailwind.config.ts` 中對應的 color scale，不要改 `globals.css` 中的 tokens
- 全站會自動套用

### 改字體
- 改 `app/layout.tsx` 中的 font import
- 同步更新 `tailwind.config.ts` 中的 `fontFamily`
- 同步更新本 CIS 文件

### 改 logo
- 替換 `public/images/logo-horizontal.png` 跟 `logo-vertical.png`
- 同步檢查 `app/layout.tsx` 中 `metadata.openGraph.images` 跟 `metadata.icons`
- 同步檢查 favicon 是否生效

### 加新元件
1. 先看 `components/ui/` 有沒有可用
2. 沒有的話開新元件，必須遵守本文件圓角、配色、字重規範
3. 新元件 lib 化後再分流到頁面（避免散落）

### 改完務必
- `npm run build` 確認沒紅
- 在桌機 + 手機尺寸都看一次（手機 375px / 桌機 1440px）
- 推 GitHub 後請 Claude 觸發 Zeabur redeploy

---

## 附錄：常見錯誤示範

### ❌ 不要
```tsx
// 寫死顏色
<div style={{ background: '#1F2D3D' }}>...</div>

// 用襯線體
<h1 className="font-serif">...</h1>

// 沒圓角的卡片
<div className="bg-pearl border border-ink-100 p-8">...</div>

// 沒圓角的按鈕
<button className="bg-teal-500 px-6 py-3">...</button>

// 模糊形容詞
「我們是業界最強的商會。」

// 客氣到僵硬
「敬請您撥冗蒞臨指導。」
```

### ✅ 改成
```tsx
// 用 token
<div className="bg-ink-700">...</div>

// 用 sans 黑體
<h1 className="font-sans font-black">...</h1>

// 標準卡片
<div className="card-feature">...</div>
// 或 inline 加 rounded-2xl
<div className="bg-pearl border border-ink-100 rounded-2xl p-8">...</div>

// 標準按鈕
<button className="btn-teal">...</button>

// 具體數字
「累計 2.85 億引薦金額、1,240 筆真實案件。」

// 自然語氣
「來一場早餐會，讓我們認識你。」
```
