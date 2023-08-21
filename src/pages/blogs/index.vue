<script setup lang="ts">
useSeoMeta({
  title: 'RinYato - Blogs',
  description:
    'Blog articles of tips and tricks about web development, design, and more.',
  ogTitle: 'RinYato - Blogs',
  ogDescription:
    'Blog articles of tips and tricks about web development, design, and more.',
  twitterDescription:
    'Blog articles of tips and tricks about web development, design, and more.',
  ogImage: '/dreamslab-team.jpg',
  ogUrl: 'https://rinyato.com/blogs',
});

const dayjs = useDayjs();
</script>

<template>
  <section>
    <ContentList v-slot="{ list }" path="/blogs">
      <ul class="space-y-5">
        <li v-for="blog in list" :key="blog._id" class="group">
          <NuxtLink :to="blog._path">
            <div class="flex gap-3">
              <div
                class="flex-1 bg-gray-900 min-w-[100px] md:min-w-[128px] overflow-hidden rounded"
              >
                <NuxtImg
                  :src="blog.cover || '/ducks.jpg'"
                  :alt="blog.title + '-cover'"
                  class="w-full h-full object-cover"
                  sizes="xs:100 sm:128 md:200 lg:350"
                />
              </div>
              <div class="h-fit w-fit">
                <h2
                  class="group-hover:underline leading-snug underline-offset-2"
                >
                  {{ blog.title }}
                </h2>
                <time
                  class="text-gray-400 text-sm"
                  :datetime="dayjs(blog.date).utc().toString()"
                >
                  {{ dayjs(blog.date).format('DD MMM YYYY') }}
                  - {{ dayjs(blog.date).fromNow() }}
                </time>
                <p
                  class="line-clamp-2 pt-1.5 text-sm md:line-clamp-3 text-gray-400"
                >
                  {{ blog?.description }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </ContentList>
  </section>
</template>
