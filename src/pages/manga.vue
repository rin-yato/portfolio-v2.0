<script setup lang="ts">
useSeoMeta({
  title: 'RinYato - Manga list',
  description:
    'This is a collection of amazing manga that I have read and enjoyed.',
  ogTitle: 'RinYato - Manga list',
  ogDescription:
    'This is a collection of amazing manga that I have read and enjoyed.',
  twitterDescription:
    'This is a collection of amazing manga that I have read and enjoyed.',
  ogImage: '/dreamslab-team.jpg',
  ogUrl: 'https://rinyato.com/manga',
});
</script>

<template>
  <section class="space-y-5">
    <div id="sss-tier" class="">
      <h2 class="font-semibold">SSS Tier</h2>
      <div
        class="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5"
      >
        <div
          v-for="manga in SSSTierManga"
          :key="manga.title"
          class="relative flex"
        >
          <UTooltip
            :text="manga?.description"
            :ui="{
              base: 'invisible lg:visible h-full px-2 py-1 text-sm font-normal border border-gray-700',
            }"
            class="w-full"
          >
            <div
              class="rounded-md w-full h-[270px] sm:h-[400px] md:h-[330px] lg:h-[250px] bg-gray-900 border border-gray-600 overflow-hidden"
            >
              <NuxtImg
                :src="manga.cover"
                :alt="manga.title + '-cover'"
                :format="manga.cover.endsWith('.gif') ? 'gif' : 'webp'"
                class="w-full h-full object-cover"
                sizes="xs:150 sm:230 md:330 lg:380"
              />
            </div>
            <div
              class="absolute bottom-0 left-0 right-0 pt-14 bg-gradient-to-t from-black/90 to-transparent text-white p-2 rounded-b-md"
            >
              <h3 class="text-sm font-semibold leading-tight line-clamp-2">
                {{ manga.title }}
              </h3>
            </div>
          </UTooltip>
        </div>
      </div>
    </div>
  </section>
</template>
