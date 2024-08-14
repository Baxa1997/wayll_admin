/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "cdn.u-code.io"}
    ]
  },
  i18n: {
    locales: ['ru', 'uz', 'en'],
    defaultLocale: 'ru',
  }
};

export default nextConfig;
