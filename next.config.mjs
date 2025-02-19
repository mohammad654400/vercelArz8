import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === 'development';

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


const withPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: isDevelopment, // Enable in all environments
  scope: '/',
  sw: '/sw.js',
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  buildExcludes: [/middleware-manifest\.json$/],
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'https-calls',
        expiration: {
          maxEntries: 150,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
        },
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
    {
      urlPattern: /\.(png|jpg|jpeg|svg|gif|ico|webp)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'image-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
        }
      }
    },
    {
      urlPattern: /\.(js|css)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-resources',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60 // 24 hours
        }
      }
    },
    {
      urlPattern: /.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'others',
        networkTimeoutSeconds: 10, // ✅ Keep only under NetworkFirst
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60 // 24 hours
        },
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }
  ],
  fallbacks: {
    document: '/offline' // Optional: specify an offline fallback page
  }
});

export default withPWAConfig(nextConfig);