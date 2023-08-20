<template>
  <footer class="space-y-5 pb-5">
    <h2 class="leading-relaxed lg:font-light">
      Wow! you've made it to the end, I'm impressed. You should definitely say
      hi to me on social media. I share a lot of useful content there and memes
      too 😂. Oh and by the way, you can checkout my
      <NuxtLink to="/blog" class="underline underline-offset-2">
        blog 📃
      </NuxtLink>
      &nbsp;or
      <NuxtLink to="/manga" class="underline underline-offset-2">
        manga list 📚
      </NuxtLink>
    </h2>
    <div class="flex gap-3 md:gap-5 pt-10">
      <UButton
        :padded="false"
        color="white"
        variant="link"
        to="https://t.me/rinyato"
      >
        <Icon name="mingcute:telegram-fill" size="20" />
        Send me a meme &nearr;
      </UButton>
      <UButton
        :padded="false"
        color="white"
        variant="link"
        to="https://t.me/rinyato"
        class="hidden sm:flex"
      >
        Check out my blogs &nearr;
      </UButton>
      <UButton
        :padded="false"
        color="white"
        variant="link"
        to="https://t.me/rinyato"
        class="hidden sm:flex"
      >
        God tier manga &nearr;
      </UButton>
      <p class="text-gray-400 text-sm ml-auto">RinYato © 2023</p>
    </div>
  </footer>
</template>
