export default defineNuxtConfig({
  srcDir: 'src',

  ssr: true,

  extends: ['@nuxt-themes/typography'],

  modules: [
    '@nuxt/devtools',
    '@nuxt/content',
    '@nuxtjs/fontaine',
    'nuxt-icon',
    '@nuxthq/ui',
    '@nuxt/image',
    'dayjs-nuxt',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
  ],

  devtools: {
    enabled: true,
  },

  colorMode: {
    classSuffix: '',
    classPrefix: '',
    preference: 'dark',
    fallback: 'dark',
  },

  routeRules: {
    '/': { prerender: true, static: true },
    '/blogs': { prerender: true, static: true },
    '/manga': { prerender: true, static: true },
    '/blogs/**': { prerender: true, static: true },
  },

  experimental: {
    typedPages: true,
    payloadExtraction: true,
  },

  content: {
    highlight: {
      theme: 'poimandres',
      preload: [
        'ts',
        'tsx',
        'bash',
        'sh',
        'scss',
        'css',
        'json',
        'docker',
        'markdown',
        'yaml',
      ],
    },
  },
});
