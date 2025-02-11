import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.arz8.com'
      },
      {
        protocol: 'https',
        hostname: 'arz8.com'
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/proxy/landing/info",
        destination: "https://app.arz8.com/api/landing/info",
      },
      {
        source: "/api/proxy/landing/home",
        destination: "https://app.arz8.com/api/landing/home",
      },
      {
        source: "/api/proxy/landing/cryptocurrencies",
        destination: "https://app.arz8.com/api/landing/cryptocurrencies",
      },
    ];
  },
};

// Create the PWA configuration wrapper
const withPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

// Apply the PWA configuration to the Next.js config
export default withPWAConfig(nextConfig);