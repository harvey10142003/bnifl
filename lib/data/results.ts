export type SuccessStory = {
  slug: string;
  title: string;
  fromMember: string;
  toMember: string;
  industry: string;
  amount: string;
  year: number;
  story: string;
};

export const successStories: SuccessStory[] = [
  {
    slug: 'crm-implementation-2025',
    title: '一場咖啡聊出 280 萬 CRM 導入案',
    fromMember: '陳家瑋（聯合會計師）',
    toMember: '施雲漢（宇果國際行銷）',
    industry: 'marketing',
    amount: 'NT$2,800,000',
    year: 2025,
    story:
      '陳會計師的客戶為連鎖餐飲集團，正面臨會員資料散落、行銷無法量化的問題。透過分會引薦給施雲漢會長，由宇果團隊導入 LINE OA + CRM 系統，6 個月後該集團會員回購率提升 38%，年度行銷預算節省 22%。'
  },
  {
    slug: 'office-renovation-2025',
    title: '建築師 × 法律事務所｜全新形象基地',
    fromMember: '林佩珊（正聲法律）',
    toMember: '吳淑芬（芬築建築）',
    industry: 'construction',
    amount: 'NT$4,500,000',
    year: 2025,
    story:
      '林律師事務所擴編需要新據點，分會內部直接引薦給吳建築師。從選址、空間規劃到施工監造一條龍，並協同會員王志成（汽車服務）規劃停車動線，3 個月完工驗收。'
  },
  {
    slug: 'ipo-tax-planning-2025',
    title: '上櫃前的關鍵稅務佈局',
    fromMember: '楊嘉裕（富邦人壽）',
    toMember: '陳家瑋（聯合會計師）',
    industry: 'finance',
    amount: 'NT$1,200,000',
    year: 2025,
    story:
      '楊經理的高資產客戶為一家擬上櫃科技公司負責人，急需專業會計師處理上櫃前股權設計與稅務優化。引薦至陳會計師團隊，3 個月完成佈局，順利於 2025 年 Q4 送件。'
  },
  {
    slug: 'medical-marketing-2025',
    title: '醫美診所數位轉型',
    fromMember: '施雲漢（宇果國際行銷）',
    toMember: '張美玲（美麗人生診所）',
    industry: 'health',
    amount: 'NT$960,000',
    year: 2025,
    story:
      '張院長的診所原本仰賴口碑與街招，引薦給宇果團隊導入 LINE@ 預約 + 客戶分眾系統，半年新客增加 156%，回診率從 32% 提升至 61%。'
  }
];

export const monthlyResults = [
  { month: '2025-11', amount: 18_500_000, count: 32 },
  { month: '2025-12', amount: 24_300_000, count: 41 },
  { month: '2026-01', amount: 22_100_000, count: 38 },
  { month: '2026-02', amount: 19_800_000, count: 35 },
  { month: '2026-03', amount: 28_600_000, count: 47 },
  { month: '2026-04', amount: 31_200_000, count: 52 }
];
