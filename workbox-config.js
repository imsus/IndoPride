module.exports = {
  skipWaiting: true,
  clientsClaim: true,
  globDirectory: 'public/',
  globPatterns: [
    'index.html',
    '**/*.{css,js}'
  ],
  swDest: 'public/sw.js',
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'cacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 10
        }
      }
    },
    {
      urlPattern: /.*rsms\.me.*$/,
      handler: 'cacheFirst',
      options: {
        cacheName: 'fonts',
        expiration: {
          maxEntries: 10
        }
      }
    },
    {
      urlPattern: /.*cdn\.jsdelivr\.net.*$/,
      handler: 'cacheFirst',
      options: {
        cacheName: 'jsdelivr',
        expiration: {
          maxEntries: 10
        }
      }
    }
  ]
}
