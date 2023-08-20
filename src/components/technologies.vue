<script setup lang="ts">
const Technologies = [
  {
    name: 'Nextjs',
    icon: 'logos:nextjs-icon',
    url: 'https://nextjs.org',
  },
  {
    name: 'Nuxtjs',
    icon: 'logos:nuxt-icon',
    url: 'https://nuxt.com',
  },
  {
    name: 'Typescript',
    icon: 'logos:typescript-icon',
    url: 'https://www.typescriptlang.org',
  },
  {
    name: 'Zod',
    icon: 'simple-icons:zod',
    url: 'https://zod.dev',
  },
  {
    name: 'Astro',
    url: 'https://astro.build',
    icon: 'simple-icons:astro',
  },
  {
    name: 'Tailwindcss',
    url: 'https://tailwindcss.com',
    icon: 'logos:tailwindcss-icon',
  },
  {
    name: 'Nginx',
    url: 'https://www.nginx.com',
    icon: 'logos:nginx',
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com',
    icon: 'logos:docker-icon',
  },
  {
    name: 'Nestjs',
    url: 'https://nestjs.com',
    icon: 'logos:nestjs',
  },
  {
    name: 'Golang',
    url: 'https://golang.org',
    icon: 'devicon:go',
  },
  {
    name: 'Jōtai',
    url: 'https://jotai.pmnd.rs',
  },
  {
    name: 'Threejs & R3F',
    url: 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction',
    icon: 'skill-icons:threejs-light',
  },
  {
    name: 'Elysiajs',
    url: 'https://elysiajs.com',
  },
  {
    name: 'React Native',
    url: 'https://reactnative.dev',
    icon: 'logos:react',
  },
  {
    name: 'Expo',
    url: 'https://expo.dev',
    icon: 'simple-icons:expo',
  },
  {
    name: 'Shadcn UI',
    url: 'https://ui.shadcn.com',
  },
];
</script>

<template>
  <section id="technologies-list" class="space-y-5">
    <h2 class="leading-relaxed lg:font-light">
      I have always believed that as a developer, you should not stick to just
      one technology. You should always be open to learning new things. Below
      are some of the technologies that I have worked with and really enjoyed.
    </h2>
    <div class="flex flex-wrap gap-3">
      <UButton
        v-for="technology in Technologies"
        :key="technology.url"
        color="white"
        class="gap-1"
        size="md"
        :to="technology.url"
        target="_blank"
      >
        <Icon v-if="technology.icon" :name="technology.icon" size="20" />
        {{ technology.name }}
      </UButton>
    </div>
  </section>
</template>
