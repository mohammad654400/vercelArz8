/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["app.arz8.com"],
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
  
  export default nextConfig;