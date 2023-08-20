<script setup lang="ts">
const dayjs = useDayjs();

const onBackToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <article class="prose prose-invert max-w-none">
    <ContentDoc v-slot="{ doc }">
      <h1 class="!my-0">{{ doc.title }}</h1>
      <time
        class="text-gray-400 text-sm"
        :datetime="dayjs(doc.date).utc().toString()"
      >
        {{ dayjs(doc.date).format('DD MMM YYYY') }}
        <ClientOnly> - {{ dayjs(doc.date).fromNow() }} </ClientOnly>
      </time>

      <NuxtImg
        :src="doc.cover || '/ducks.jpg'"
        class="w-full lg:max-h-[35vh] object-cover rounded-lg"
      />

      <ContentRenderer :value="doc" class="render" />
    </ContentDoc>

    <UButton color="gray" class="mt-10" @click.prevent.stop="onBackToTop">
      Back to top
      <Icon name="material-symbols:arrow-upward" />
    </UButton>
  </article>
</template>
