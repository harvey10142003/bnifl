export type Industry = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export const industries: Industry[] = [
  { slug: 'finance', name: '財務金融', description: '會計師、保險、投資理財、銀行', icon: 'Banknote' },
  { slug: 'legal', name: '法律顧問', description: '律師、地政士、智財權', icon: 'Scale' },
  { slug: 'tech', name: '科技資訊', description: '系統開發、AI 應用、資訊安全', icon: 'Cpu' },
  { slug: 'marketing', name: '行銷整合', description: 'LINE 行銷、數位廣告、品牌設計', icon: 'Megaphone' },
  { slug: 'construction', name: '建築工程', description: '建築師、室內設計、營造、機電', icon: 'HardHat' },
  { slug: 'realestate', name: '不動產', description: '房仲、代銷、物業管理', icon: 'Building2' },
  { slug: 'health', name: '健康醫美', description: '診所、藥局、保健、復健', icon: 'HeartPulse' },
  { slug: 'food', name: '餐飲食品', description: '餐廳、烘焙、食品代理、團膳', icon: 'UtensilsCrossed' },
  { slug: 'retail', name: '零售通路', description: '電商、實體門市、進出口貿易', icon: 'ShoppingBag' },
  { slug: 'education', name: '教育訓練', description: '才藝、職能、企業內訓', icon: 'GraduationCap' },
  { slug: 'auto', name: '汽機車服務', description: '銷售、保修、租賃、零配件', icon: 'Car' },
  { slug: 'lifestyle', name: '生活美學', description: '攝影、花藝、婚禮、藝術', icon: 'Sparkles' },
  { slug: 'manufacturing', name: '製造產業', description: '五金、零件、模具、工廠服務', icon: 'Factory' },
  { slug: 'service', name: '專業服務', description: '人資、翻譯、清潔、物流', icon: 'Briefcase' }
];
