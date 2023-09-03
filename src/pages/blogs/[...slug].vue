<script setup lang="ts">
const dayjs = useDayjs();

const onBackToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const { data } = await useAsyncData('blog', () => {
  return queryContent().findOne();
});

useSeoMeta({
  ogImage: data?.value && getBlogCover(data.value),
});
</script>

<template>
  <article class="prose prose-invert max-w-none">
    <ContentDoc v-slot="{ doc }">
      <Head>
        <Title>{{ doc.title }} - RinYato</Title>
        <Meta name="og:title" :content="doc.title + ' - RinYato'" />
        <Meta name="og:description" :content="getOgDescription(doc)" />
        <Meta name="og:image" :content="getBlogCover(doc)" />
        <Meta name="og:url" :content="`https://rinyato.com${doc._path}`" />
        <Meta name="twitter:title" :content="doc.title + ' - RinYato'" />
        <Meta name="twitter:description" :content="getOgDescription(doc)" />
        <Meta name="twitter:image" :content="getBlogCover(doc)" />
        <Meta name="twitter:url" :content="`https://rinyato.com${doc._path}`" />
        <Meta name="description" :content="getOgDescription(doc)" />
      </Head>
      <h1 class="!my-0 font-medium max-sm:text-2xl">{{ doc.title }}</h1>
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
          :src="getBlogCover(doc)"
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
.prose :deep(img) {
  @apply rounded-lg;
}
.prose :deep(.prose-code-inline) {
  @apply !bg-gray-300/20 text-gray-200;
}

.prose :deep(.prose-code) {
  @apply !bg-gray-900 border-gray-800 text-gray-200 rounded-lg;
}

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

.prose :deep(p) {
  line-height: 1.7;
}

.prose :deep(.prose-li) {
  margin: 8px 0 !important;
}
</style>
