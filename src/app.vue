<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
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
  title: 'RinYato - Portfolio',
  description:
    "Hi, this is Yato ✌️. I'm a developer and a tiny bit of a designer. Beside coding, I make educational content about tech.",
  ogTitle: 'RinYato - Portfolio',
  ogDescription:
    "Hi, this is Yato ✌️. I'm a developer and a tiny bit of a designer. Beside coding, I make educational content about tech.",
  ogImage: '/dreamslab-team.jpg',
  ogUrl: 'https://rinyato.com',
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
