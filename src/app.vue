<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
    class: 'dark',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
});
useSeoMeta({
  ogType: 'website',
  ogSiteName: 'RinYato',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterCreator: '@chearithorn',
  author: 'RinYato',
});
</script>

<template>
  <main
    class="max-w-3xl space-y-16 border-gray-700 md:bg-gray-500/20 md:border-2 md:rounded-xl py-5 px-7 mx-auto md:my-[20vh] min-h-screen"
  >
    <Navbar />
    <NuxtPage />
  </main>
</template>
