export default defineNuxtConfig({
  srcDir: 'src',

  modules: [
    '@nuxt/devtools',
    '@nuxt/content',
    '@nuxtjs/fontaine',
    'nuxt-icon',
    '@nuxthq/ui',
    '@nuxt/image',
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

  css: ['~/assets/globals.css'],

  routeRules: {
    '/': { prerender: true, static: true },
    '/blogs': { prerender: true, static: true },
    '/manga': { prerender: true, static: true },
  },

  experimental: {
    typedPages: true,
  },

  content: {
    highlight: {
      theme: 'monokai',
    },
  },
});
