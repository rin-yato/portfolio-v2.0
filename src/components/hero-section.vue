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

// const toast = useToast();

// const copyGmail = () => {
//   window.navigator.clipboard.writeText('chearithorn@gmail.com');
//   toast.add({
//     icon: 'i-heroicons-clipboard-document-check-solid',
//     title: 'Gmail has been copied to clipboard.',
//     color: 'gray',
//   });
// };
</script>

<template>
  <section class="space-y-5">
    <div class="flex gap-5">
      <UAvatar
        src="https://avatars.githubusercontent.com/u/106462074?v=4"
        alt="Yato"
        size="3xl"
      />
      <div class="my-auto">
        <h2 class="text-xl font-bold">RinYato&nbsp;🍀</h2>
        <div class="group relative">
          <UBadge
            variant="solid"
            color="white"
            class="absolute pointer-events-none left-full w-max z-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 duration-200"
          >
            Click to copy gmail
          </UBadge>
          <UButton id="email" color="gray" :padded="false" variant="link">
            chearithorn@gmail.com
          </UButton>
        </div>
        <p class="text-gray-400 text-sm">@rinyato</p>
      </div>
    </div>
    <h1 class="font-light leading-relaxed">
      Hi there, this is <span class="hover:underline">Yato</span> ✌️. I'm a
      developer and a tiny bit of a designer. Beside coding, I like making
      educational content about tech. I love to learn new things and share them
      with others. You can find me on social apps with the links below.
    </h1>
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
