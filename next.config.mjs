import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === 'development';

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'app.arz8.com' },
      { protocol: 'https', hostname: 'arz8.com' }
    ]
  },
};

const withPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: isDevelopment,
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
          maxAgeSeconds: 30 * 24 * 60 * 60
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
          maxAgeSeconds: 7 * 24 * 60 * 60
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
          maxAgeSeconds: 24 * 60 * 60
        }
      }
    },
    {
      urlPattern: /.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60
        },
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }
  ],
  fallbacks: {
    document: '/offline'
  }
});

export default withPWAConfig(nextConfig);
