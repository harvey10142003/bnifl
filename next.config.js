/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next 15.2 起動態頁（layout 是 force-dynamic）的 metadata 預設串流到 <body>，只對內建 bot 名單放 <head>；
  // Googlebot 與一般瀏覽器都拿到 body 版，Lighthouse SEO 判「沒有 meta description」（100 → 92）。
  // 全站 metadata 都是靜態資料，串流沒有好處 → 一律阻塞輸出在 <head>，等同 Next 14 行為。
  htmlLimitedBots: /.*/,
  images: {
    // q 值白名單：不在名單的 /_next/image?q= 一律 400，擋「換 q 值逼伺服器重算」的 CPU DoS。
    // 實際用到：about 頁 quality={70}、其餘 <Image> 預設 75。新增 quality={N} 必須同步加進來，否則該圖 400。
    qualities: [70, 75],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'ui-avatars.com' }
    ]
  }
};

module.exports = nextConfig;
