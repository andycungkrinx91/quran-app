import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'fade', mode: 'out-in' },
    head: {
      meta: [
        { name: 'theme-color', content: '#ffffff' },
        { name: 'name', content: 'Quran App' },
        { name: 'author', content: 'Andy Setiyawan' },
        {
          name: 'description',
          content: 'Quran App | Alquran App | Alquran Online | Alquran Digital',
        },
        {
          property: 'og:description',
          content: 'Alquran Digital Untuk Umat Islam Dengan Tampilan Mobile Friendly.',
        },
        { property: 'og:image', content: 'https://alquran-apps.vercel.app/logo-full.png' },
      ],
      htmlAttrs: {
        lang: 'id',
      },
    },
  },

  alias: {
    models: fileURLToPath(new URL('./models/', import.meta.url)),
  },

  css: ['~/assets/css/main.scss'],

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  eslint: {
    lintOnStart: false,
  },

  googleFonts: {
    families: {
      Mallanna: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Scheherazade New': true,
    },
    display: 'swap',
    preload: true,
    download: true,
  },

  imports: {
    dirs: ['stores'],
  },

  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    'nuxt-vercel-analytics',
    'nuxt-og-image',
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },

  pwa: {
    manifest: {
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      name: 'Quran App',
      short_name: 'Quran App',
      description: 'Web application Al Quran for the Islamic religion',
      icons: [
        {
          src: '/icon-pwa/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-pwa/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: '/icon-pwa/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: '/icon-pwa/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/icon-pwa/maskable-icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: null,
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      cleanupOutdatedCaches: false,
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: false,
      type: 'module',
    },
  },

  routeRules: {
    '/': { prerender: true, redirect: '/al-quran' },
    '/hadith': { ssr: true },
    '/prayer': { ssr: true },
    '/schedule': { ssr: false },
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.scss',
    configPath: 'tailwind.config',
    viewer: false,
  },
})
