export type News = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: '主題簡報' | '會員專訪' | '活動公告' | '媒體報導';
  cover: string;
  author?: string;
  publishedAt: string;
  week?: number;
};

export const news: News[] = [
  {
    slug: 'week-180-line-marketing',
    title: '第 180 週主題簡報｜LINE 行銷自動化的 3 個誤區與 7 個轉換率指標',
    excerpt:
      '宇果國際行銷執行長施雲漢分享導航式行銷方法論，揭露 LINE@ 自動化漏斗常見錯誤，並提供可量化的關鍵指標儀表板。',
    content:
      '本次主題簡報由 BNI 富聯白金分會會長施雲漢主講，深入剖析企業導入 LINE 行銷時最常踩的 3 個雷區：把廣播當行銷、把好友數當業績、把 OA 當客服。會中亦展示其自行開發的 CRM 儀表板，現場演示如何在 24 小時內完成從引流、分眾到再行銷的完整漏斗閉環。',
    category: '主題簡報',
    cover: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    author: '施雲漢',
    publishedAt: '2026-04-24',
    week: 180
  },
  {
    slug: 'bod-2026-may',
    title: '2026 年 5 月 BOD 擴大商機日｜誠摯邀請您共創高雄商機',
    excerpt:
      '富聯白金分會將於 5/26 舉辦半年度線上 BOD 擴大商機日，邀請 200+ 高雄企業主一同見證引薦平台的商業實力。',
    content:
      '時間：2026 年 5 月 26 日（週二）06:30 - 08:30\n地點：線上 Zoom 會議室（報名後寄送連結）\n當日活動包含：分會 60 秒輪播、會員代表簡報、高峰交流時間、來賓自我介紹、抽獎活動。歡迎各產業老闆、業務主管、高階經理人線上參加。',
    category: '活動公告',
    cover: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
    publishedAt: '2026-04-20'
  },
  {
    slug: 'member-interview-chen-jia-wei',
    title: '會員專訪｜陳家瑋會計師：節稅不是省小錢，而是設計大未來',
    excerpt: '從基層查帳員到主持會計師，陳家瑋分享 15 年來如何用財稅思維協助企業主跨越每一個成長關卡。',
    content:
      '「節稅其實是企業策略的副產品，而不是目的。」陳家瑋會計師娓娓道來他與 200+ 中小企業主的合作故事⋯⋯',
    category: '會員專訪',
    cover: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    author: '編輯室',
    publishedAt: '2026-04-15'
  },
  {
    slug: 'week-178-construction',
    title: '第 178 週主題簡報｜建築美學中的「白金比例」',
    excerpt: '吳淑芬建築師從多項得獎作品出發，談論台灣中小型住宅如何在預算限制下做出國際級的設計感。',
    content: '本次主題簡報吳淑芬建築師以實際作品案例分享⋯⋯',
    category: '主題簡報',
    cover: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    author: '吳淑芬',
    publishedAt: '2026-04-10',
    week: 178
  },
  {
    slug: 'media-coverage-tcsme',
    title: '媒體報導｜《商周》專訪：高雄 BNI 富聯白金分會的引薦力學',
    excerpt: '《商業周刊》以 6 頁專題報導富聯白金分會 5 年來累計 2.85 億引薦金額背後的系統化方法論。',
    content: '《商業周刊》第 1990 期以「高雄商業生態的隱形引擎」為題⋯⋯',
    category: '媒體報導',
    cover: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80',
    publishedAt: '2026-03-28'
  },
  {
    slug: 'week-175-ai-application',
    title: '第 175 週主題簡報｜AI 不是來搶工作，是來幫你變成超人',
    excerpt: '智匯科技黃承恩深入淺出地展示 AI 如何接管中小企業的 12 個重複性流程。',
    content: '黃承恩教育長現場展示了 4 個 AI 工作流案例⋯⋯',
    category: '主題簡報',
    cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    author: '黃承恩',
    publishedAt: '2026-03-20',
    week: 175
  }
];

export const newsBySlug = (slug: string) => news.find((n) => n.slug === slug);
export const newsByCategory = (cat: News['category']) => news.filter((n) => n.category === cat);
