export type Testimonial = {
  /** 對應 members.ts 的 slug */
  memberSlug: string;
  /** 50–100 字的推薦語錄（不要超過 140） */
  quote: string;
  /** 加入幾年（顯示用） */
  yearsAsMember: number;
};

/**
 * 會員推薦語錄。
 * 規則：寫得像真人說的話，避免空話；每段點出一個具體價值（引薦結果、信任、成長、認識的人、商機）。
 * 引用真實會員（slug 必須能對應 members.ts），讓頭像、頭銜、產業自動帶入。
 */
export const testimonials: Testimonial[] = [
  {
    memberSlug: 'shih-yun-han',
    quote:
      '加入 5 年，我用 LINE 行銷接到的最大案子，是分會內部引薦的。富聯不是教你怎麼賣，是讓你被信任。',
    yearsAsMember: 5
  },
  {
    memberSlug: 'chen-jia-wei',
    quote:
      '會計師最值錢的是判斷，不是報稅。在富聯，每週四清晨我都被迫整理本週對其他產業的觀察 — 這是我成長最快的訓練場。',
    yearsAsMember: 5
  },
  {
    memberSlug: 'lin-pei-shan',
    quote:
      '事務所擴編時，我從來沒上過 591 — 全部是富聯的建築師、不動產、汽車服務一條龍處理完，3 個月搬完家。',
    yearsAsMember: 4
  },
  {
    memberSlug: 'wu-shu-fen',
    quote:
      '建築設計案的源頭從來不是廣告，是「對的人在對的時候介紹對的人」。富聯讓我認識的不是客戶，是 5 年後還會合作的朋友。',
    yearsAsMember: 5
  },
  {
    memberSlug: 'huang-cheng-en',
    quote:
      '我以為科技公司不需要實體商會。錯。我這 2 年最棒的客戶都來自富聯，因為他們先信任我，再了解我寫的程式。',
    yearsAsMember: 4
  }
];
