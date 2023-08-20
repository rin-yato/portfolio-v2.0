<script setup lang="ts">
const { data: blogs } = await useAsyncData('blogs', () =>
  queryContent('blogs').find(),
);

const dayjs = useDayjs();
</script>

<template>
  <section>
    <ul class="space-y-5">
      <li v-for="blog in blogs" :key="blog._id" class="group">
        <NuxtLink :to="blog._path">
          <div class="flex gap-3">
            <NuxtImg
              :src="blog.cover || '/ducks.jpg'"
              class="h-32 w-auto aspect-video object-cover rounded-lg"
            />
            <div>
              <h2 class="group-hover:underline leading-snug underline-offset-2">
                {{ blog.title }}
              </h2>
              <time
                class="text-gray-400 text-sm"
                :datetime="dayjs(blog.date).utc().toString()"
              >
                {{ dayjs(blog.date).format('DD MMM YYYY') }}
                <ClientOnly> - {{ dayjs(blog.date).fromNow() }} </ClientOnly>
              </time>
              <p
                class="line-clamp-2 pt-1.5 text-sm lg:line-clamp-3 text-gray-400"
              >
                {{ blog?.description }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
