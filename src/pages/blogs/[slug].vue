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
        - {{ dayjs(doc.date).fromNow() }}
      </time>
      <div
        class="rounded-lg my-6 w-full bg-gray-900 h-[40vh] lg:h-[35vh] overflow-hidden"
      >
        <NuxtImg
          :src="doc.cover || '/ducks.jpg'"
          :alt="doc.title + '-cover'"
          class="w-full h-full object-cover !my-0"
          sizes="xs:350 sm:700 md:1000 lg:1200"
        />
      </div>

      <ContentRenderer :value="doc" class="render" />
    </ContentDoc>

    <UButton color="gray" class="mt-10" @click.prevent.stop="onBackToTop">
      Back to top
      <Icon name="material-symbols:arrow-upward" />
    </UButton>
  </article>
</template>

<style scoped>
.prose :deep(h2 a) {
  text-decoration: none !important;
  position: relative !important;
}
.prose :deep(h2 a::before) {
  content: '#' !important;
  color: #4ade80 !important;
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  @apply absolute top-1/2 -translate-y-1/2 -right-5 hidden;
}

.prose :deep(h2 a:hover::before) {
  @apply block;
}

.prose :deep(h2 a) {
  font-size: 1.25rem !important;
  font-weight: 600 !important;
}

.prose :deep(.prose-a:hover) {
  color: #4ade80 !important;
}

.prose :deep(.prose-li) {
  margin: 8px 0 !important;
}
</style>
