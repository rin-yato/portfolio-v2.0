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

  devtools: { enabled: true },

  colorMode: {
    classSuffix: '',
    classPrefix: '',
    preference: 'dark',
    fallback: 'dark',
  },

  css: ['~/assets/globals.css'],

  content: {
    highlight: {
      theme: 'monokai',
    },
  },
});
