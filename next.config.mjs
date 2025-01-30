/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/api/proxy/landing/info", 
          destination: "https://app.arz8.com/api/landing/info", 
        },
      ];
    },
  };
  
  export default nextConfig;
  