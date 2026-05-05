export type Member = {
  slug: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  role?: '會長' | '副會長' | '秘書' | '財務長' | '教育長' | '會員委員會' | '訪客委員會' | '活動長';
  bio: string;
  services: string[];
  phone?: string;
  email?: string;
  lineId?: string;
  website?: string;
  avatar: string;
  joinedYear: number;
};

const av = (seed: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(seed)}&background=1F2D3D&color=FAFAF7&size=400&font-size=0.4&bold=true`;

export const members: Member[] = [
  {
    slug: 'shih-yun-han',
    name: '施雲漢',
    title: '執行長',
    company: '宇果國際行銷',
    industry: 'marketing',
    role: '會長',
    bio: '宇果國際行銷創辦人，自創「導航式行銷」方法論，協助 100+ 企業導入 LINE@ 行銷自動化、CRM 系統與會員經營。亦為 BNI 富聯白金分會 LINE 行銷顧問。',
    services: ['LINE OA 顧問', 'CRM 客戶管理系統', 'MGM 推薦機制', '會員自動化漏斗', 'LIFF 應用開發'],
    phone: '0900-000-001',
    email: 'shark@ugomk.com',
    lineId: '@ugomk',
    website: 'https://lineai.ugomk.com',
    avatar: av('Shih Yun Han'),
    joinedYear: 2021
  },
  {
    slug: 'chen-jia-wei',
    name: '陳家瑋',
    title: '主持會計師',
    company: '聯合會計師事務所',
    industry: 'finance',
    role: '副會長',
    bio: '專注中小企業財稅規劃 15 年，協助上百家公司優化稅務結構，並提供股權設計與接班顧問服務。',
    services: ['營利事業所得稅申報', '股權設計', '稅務簽證', '財務健診'],
    phone: '07-000-0001',
    avatar: av('Chen Jia Wei'),
    joinedYear: 2021
  },
  {
    slug: 'lin-pei-shan',
    name: '林佩珊',
    title: '主持律師',
    company: '正聲法律事務所',
    industry: 'legal',
    role: '秘書',
    bio: '高雄執業律師，專長企業合約審閱、商務糾紛訴訟、勞資爭議調解，為多家上市櫃公司法律顧問。',
    services: ['合約審閱', '商務訴訟', '勞資調解', '智慧財產權'],
    avatar: av('Lin Pei Shan'),
    joinedYear: 2022
  },
  {
    slug: 'huang-cheng-en',
    name: '黃承恩',
    title: '創辦人',
    company: '智匯科技股份有限公司',
    industry: 'tech',
    role: '教育長',
    bio: '15 年系統開發經驗，主導多項政府數位轉型專案，現專注於 AI 整合與企業流程自動化解決方案。',
    services: ['AI 客製整合', 'ERP 系統建置', '流程自動化', '資安顧問'],
    avatar: av('Huang Cheng En'),
    joinedYear: 2022
  },
  {
    slug: 'wu-shu-fen',
    name: '吳淑芬',
    title: '建築師',
    company: '芬築建築師事務所',
    industry: 'construction',
    role: '財務長',
    bio: '高雄知名女性建築師，作品橫跨住宅、商辦與公共空間，多次入選台灣建築獎。',
    services: ['住宅建築設計', '商辦規劃', '公共工程', '結構評估'],
    avatar: av('Wu Shu Fen'),
    joinedYear: 2021
  },
  {
    slug: 'cai-bo-yan',
    name: '蔡博彥',
    title: '總經理',
    company: '宏邦不動產',
    industry: 'realestate',
    role: '會員委員會',
    bio: '深耕高雄不動產 12 年，專注鳳山、左營商辦與透天市場，協助投資客資產配置。',
    services: ['商辦租售', '住宅買賣', '土地開發', '都更整合'],
    avatar: av('Cai Bo Yan'),
    joinedYear: 2023
  },
  {
    slug: 'zhang-mei-ling',
    name: '張美玲',
    title: '院長',
    company: '美麗人生診所',
    industry: 'health',
    role: '訪客委員會',
    bio: '皮膚專科醫師，擅長雷射、肉毒、玻尿酸等醫美療程，主張自然優雅的逆齡美學。',
    services: ['雷射療程', '微整形', '保養諮詢', '抗老醫學'],
    avatar: av('Zhang Mei Ling'),
    joinedYear: 2022
  },
  {
    slug: 'li-jian-hong',
    name: '李建宏',
    title: '主廚兼負責人',
    company: '宏味餐飲集團',
    industry: 'food',
    role: '活動長',
    bio: '台菜大師，集團旗下 5 間餐廳橫跨高雄精華地段，曾獲得多項美食評鑑肯定。',
    services: ['企業外燴', '婚宴喜慶', '商務聚餐', '食材供應'],
    avatar: av('Li Jian Hong'),
    joinedYear: 2021
  },
  {
    slug: 'yang-jia-yu',
    name: '楊嘉裕',
    title: '經理',
    company: '富邦人壽',
    industry: 'finance',
    bio: 'MDRT 終身會員，專注高資產客戶資產配置、傳承規劃與企業團體保險服務。',
    services: ['人壽保險', '醫療規劃', '退休理財', '稅務傳承'],
    avatar: av('Yang Jia Yu'),
    joinedYear: 2021
  },
  {
    slug: 'guo-yi-ting',
    name: '郭怡庭',
    title: '創辦人',
    company: 'GUO Studio 攝影工作室',
    industry: 'lifestyle',
    bio: '商業攝影師，作品散見於各大品牌型錄、人物雜誌與企業形象網站。',
    services: ['品牌形象拍攝', '產品攝影', '人物寫真', '空間紀實'],
    avatar: av('Guo Yi Ting'),
    joinedYear: 2023
  },
  {
    slug: 'wang-zhi-cheng',
    name: '王志成',
    title: '總監',
    company: '誠信汽車服務中心',
    industry: 'auto',
    bio: 'BMW、Benz 認證原廠技師出身，自行創業 8 年，提供高雄地區進口車保修與精緻洗護。',
    services: ['進口車保修', '精緻美容', '中古車鑑定', '改裝諮詢'],
    avatar: av('Wang Zhi Cheng'),
    joinedYear: 2022
  },
  {
    slug: 'su-pei-yu',
    name: '蘇珮瑀',
    title: '創辦人',
    company: '珮瑀親子教育',
    industry: 'education',
    bio: '兒童職能治療師背景，專注 0-12 歲感覺統合、情緒管理課程設計，深受家長信賴。',
    services: ['感統課程', '親職諮詢', '師資培訓', '到府教學'],
    avatar: av('Su Pei Yu'),
    joinedYear: 2023
  }
];

export const officers = members.filter((m) => m.role);

export const memberBySlug = (slug: string) => members.find((m) => m.slug === slug);
export const membersByIndustry = (industry: string) =>
  members.filter((m) => m.industry === industry);
