<script setup lang="ts">
const SocialConfig = [
  {
    icon: 'uil:github',
    username: 'Github',
    link: 'https://github.com/rin-yato',
  },
  {
    icon: 'mingcute:telegram-fill',
    username: 'Telegram',
    link: 'https://t.me/rinyato',
  },
  {
    icon: 'simple-icons:x',
    username: 'X.com',
    link: 'https://twitter.com/chearithorn',
  },
  {
    icon: 'ic:baseline-facebook',
    username: 'Facebook',
    link: 'https://www.facebook.com/chearithorn',
  },
];
</script>

<template>
  <section class="space-y-5">
    <div class="flex gap-5">
      <UAvatar
        src="/profile-sky.jpg"
        alt="Yato"
        size="3xl"
        chip-color="primary"
        class="object-cover object-bottom"
      />
      <div class="my-auto">
        <h2 class="text-xl font-bold">RinYato&nbsp;🍀</h2>

        <UButton
          id="email"
          color="gray"
          :padded="false"
          variant="link"
          to="mailto:chearithorn@gmail.com"
        >
          chearithorn@gmail.com
        </UButton>

        <p class="text-gray-400 text-sm">@rinyato</p>
      </div>
    </div>
    <h1 class="lg:font-light leading-relaxed my-0">
      Hi, this is <span class="hover:underline">Yato</span> ✌️. I'm a developer
      and a tiny bit of a designer. Beside coding, I make educational content
      about tech.
    </h1>
    <div
      class="flex flex-col md:flex-row gap-3 lg:gap-5 max-w-full overflow-x-auto"
    >
      <div class="grid grid-cols-2 gap-3 md:gap-5">
        <div class="flex flex-col gap-3 md:gap-5">
          <NuxtImg
            src="/dreamslab-team.jpg"
            alt="Dreamslab Team"
            class="rounded h-40 w-full object-cover"
            quality="100"
            format="webp"
          />
          <NuxtImg
            src="/cats.jpg"
            alt="Cat"
            class="rounded h-56 w-full object-cover object-top"
            quality="100"
            format="webp"
          />
        </div>
        <div>
          <NuxtImg
            src="/angkor.jpeg"
            alt="Acient Temple"
            class="rounded h-[396px] md:h-[404px] w-full object-cover"
            quality="100"
            format="webp"
          />
        </div>
      </div>
      <div class="flex flex-row md:flex-col gap-3 md:gap-5">
        <NuxtImg
          src="/profile-half.jpg"
          alt="Yato"
          class="rounded h-56 md:w-full object-cover"
          quality="100"
          format="webp"
        />
        <NuxtImg
          src="/house-garden.jpeg"
          alt="Yato"
          class="rounded h-56 md:h-40 w-full object-cover"
          format="webp"
        />
      </div>
    </div>
    <h2 class="lg:font-light leading-relaxed">
      I love to learn new things and share them with others. You can find me on
      social apps with the links below.
    </h2>
    <div class="gap-3 md:gap-5 grid grid-cols-2 md:grid-cols-4">
      <UButton
        v-for="social in SocialConfig"
        :key="social.icon"
        color="white"
        class="!p-4 group"
        :to="social.link"
        target="_blank"
      >
        <span class="flex items-center gap-1">
          <Icon :name="social.icon" size="24" />
          <span>{{ social.username }}</span>
        </span>
        <span class="-rotate-45 ml-auto group-hover:scale-150 duration-200">
          &rarr;
        </span>
      </UButton>
    </div>
  </section>
</template>
