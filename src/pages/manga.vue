<script setup lang="ts">
import { MANGA } from '@consumet/extensions';

const mangaDex = new MANGA.MangaDex();

const sssTierMangaIds = (
  await $fetch<any>(
    'https://api.mangadex.org/list/454216a0-7d6d-456a-a7f9-54bdfa128fc9?latest',
  )
).data.relationships.filter((item: any) => item.type === 'manga');

const sssTierMangas = await Promise.all(
  sssTierMangaIds.map(async (item: any) => {
    const mangaData = await mangaDex.fetchMangaInfo(item.id);
    return mangaData;
  }),
);

console.log(sssTierMangas);
</script>

<template>
  <section class="space-y-5">
    <div id="sss-tier" class="">
      <h2 class="font-semibold">SSS Tier</h2>
      <div
        class="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5"
      >
        <div
          v-for="manga in sssTierMangas"
          :key="manga.id"
          class="relative flex"
        >
          <UTooltip
            :text="manga.description.en"
            :ui="{
              base: 'invisible lg:visible h-full px-2 py-1 text-xs font-normal line-clamp-6',
            }"
          >
            <NuxtImg
              class="rounded-md w-full h-full object-cover"
              :src="manga.image"
              :alt="manga.title + '-cover'"
            />
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
