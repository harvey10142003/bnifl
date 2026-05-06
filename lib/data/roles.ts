/**
 * BNI 八核執掌（Executive Committee）職責定義。
 * 每屆 6 個月輪替一次，由會員自願擔任。
 */

export type RoleKey =
  | '會長'
  | '副會長'
  | '秘書'
  | '財務長'
  | '教育長'
  | '會員委員會'
  | '訪客委員會'
  | '活動長';

export type RoleDef = {
  key: RoleKey;
  nameEn: string;
  /** 一句話定義這個角色 */
  tagline: string;
  /** 3 條具體職責 */
  duties: string[];
  /** 對應 lucide-react icon name */
  icon: string;
};

export const roles: RoleDef[] = [
  {
    key: '會長',
    nameEn: 'President',
    tagline: '帶領整個分會的方向、節奏與文化。',
    duties: [
      '主持每週四例會，掌握 2 小時節目流程',
      '對外代表分會出席聯誼、跨會交流',
      '與其他幹部每週 1 次幹部會議，校準目標'
    ],
    icon: 'Crown'
  },
  {
    key: '副會長',
    nameEn: 'Vice President',
    tagline: '會員品質的守門員。',
    duties: [
      '監督每位會員的引薦、出席、感謝卡量化指標',
      '處理會員續會、缺席、紅黃牌事務',
      '會長缺席時代理主持例會'
    ],
    icon: 'Shield'
  },
  {
    key: '秘書',
    nameEn: 'Secretary',
    tagline: '所有紀錄與資訊的核心。',
    duties: [
      '彙整每週引薦單、感謝卡、商機分享',
      '維護會員資料庫、新進會員 onboarding 文件',
      '產出每週例會紀要、季度績效報表'
    ],
    icon: 'BookOpen'
  },
  {
    key: '財務長',
    nameEn: 'Treasurer',
    tagline: '分會財務透明度的保證。',
    duties: [
      '管理分會公帳（年費、活動費、餐費）',
      '每月公布收支報表，季度公布財務概況',
      '統籌大型活動（BOD、商機日）預算'
    ],
    icon: 'Wallet'
  },
  {
    key: '教育長',
    nameEn: 'Education Coordinator',
    tagline: '讓會員每週都比上週更會做生意。',
    duties: [
      '規劃每週 5 分鐘教育單元（BNI 教學影片或自製案例）',
      '舉辦季度進修活動（如 60 秒簡報優化、感謝卡寫作）',
      '安排新進會員的 BNI 五大基本功訓練'
    ],
    icon: 'GraduationCap'
  },
  {
    key: '會員委員會',
    nameEn: 'Membership Committee',
    tagline: '產業守門員，決定誰能進來。',
    duties: [
      '審核新會員申請（產業重疊、誠信背景）',
      '面試新會員，評估與既有會員的合作可能',
      '管理會員產業分類，避免內部競爭'
    ],
    icon: 'UserCheck'
  },
  {
    key: '訪客委員會',
    nameEn: 'Visitor Host Coordinator',
    tagline: '訪客體驗的第一線。',
    duties: [
      '接待每週訪客，做開場介紹、流程說明',
      '訪後 24 小時內聯繫每位訪客，安排第二次參訪或加入流程',
      '統計訪客來源、轉換率，每月回報幹部會'
    ],
    icon: 'Users'
  },
  {
    key: '活動長',
    nameEn: 'Event Coordinator',
    tagline: '把例會以外的關係延伸出去。',
    duties: [
      '規劃 BOD（半年度擴大商機日）、聯誼活動、跨會交流',
      '統籌活動場地、餐飲、會員邀約',
      '與外部廠商、媒體、攝影團隊協調'
    ],
    icon: 'Calendar'
  }
];

export const roleByKey = (key: RoleKey) => roles.find((r) => r.key === key);
