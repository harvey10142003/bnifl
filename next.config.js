/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
