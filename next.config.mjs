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

      ];
    },
  };
  
  export default nextConfig;