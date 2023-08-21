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

  image: {
    presets: {
      avatar: {
        modifiers: {
          fit: 'cover',
          format: 'webp',
          height: 100,
          width: 100,
        },
      },
      'blog-thumbnail': {
        modifiers: {
          fit: 'cover',
          format: 'webp',
          height: 150,
          width: 150,
        },
      },
      'blog-cover': {
        modifiers: {
          fit: 'cover',
          format: 'webp',
          height: 300,
          width: 300,
        },
      },
      'blog-cover-large': {
        modifiers: {
          fit: 'cover',
          format: 'webp',
          height: 900,
          width: 900,
        },
      },
      manga: {
        modifiers: {
          fit: 'cover',
          format: 'gif,webp',
          height: 400,
          width: 300,
        },
      },
    },
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
