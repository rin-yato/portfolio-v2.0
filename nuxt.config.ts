export default defineNuxtConfig({
  srcDir: 'src',

  extends: ['@nuxt-themes/typography', 'nuxt-umami'],

  modules: [
    '@nuxt/devtools',
    '@nuxt/content',
    '@nuxtjs/fontaine',
    'nuxt-icon',
    '@nuxthq/ui',
    '@nuxt/image',
    'dayjs-nuxt',
  ],

  devtools: {
    enabled: true,
  },

  appConfig: {
    umami: {
      version: 2,
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/blogs': { prerender: true },
    '/manga': { prerender: true },
    '/blogs/**': { prerender: true },
  },

  experimental: {
    typedPages: true,
    viewTransition: true,
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
