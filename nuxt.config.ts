export default defineNuxtConfig({
  srcDir: 'src',

  extends: ['@nuxt-themes/typography'],

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

    timeline: {
      enabled: true,
    },
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
    '/blogs/:slug': { static: true },
  },

  experimental: {
    typedPages: true,
  },

  content: {
    highlight: {
      theme: 'monokai',
    },
    markdown: {
      anchorLinks: false,
    },
  },
});
