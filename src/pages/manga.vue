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
          >
            <NuxtImg
              class="rounded-md w-full h-full object-cover"
              :src="manga.cover"
              :alt="manga.title + '-cover'"
              format="webp"
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
