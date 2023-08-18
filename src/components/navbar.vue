<script setup lang="ts">
const NavConfig = [
  { name: 'Home', path: '/' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Manga', path: '/manga' },
];
</script>

<template>
  <nav class="flex justify-between items-center">
    <ul class="flex space-x-3">
      <li v-for="item in NavConfig" :key="item.path">
        <UButton
          active-class="underline !text-white"
          class="text-gray-300"
          variant="link"
          color="gray"
          :to="item.path"
          :padded="false"
        >
          {{ item.name }}
        </UButton>
      </li>
    </ul>
    <UBadge color="primary" variant="subtle" class="pointer-events-none">
      Available for Work &nbsp;
      <span class="relative flex h-1.5 w-1.5">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
        />
        <span
          class="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"
        />
      </span>
    </UBadge>
  </nav>
</template>
