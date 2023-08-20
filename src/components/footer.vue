<template>
  <footer class="space-y-5 pb-5">
    <h2 class="leading-relaxed lg:font-light">
      Wow! you've made it to the end, I'm impressed. You should definitely say
      hi to me on social media. I share a lot of useful content there and memes
      too 😂. Oh and by the way, you can checkout my
      <NuxtLink to="/blogs" class="underline underline-offset-2">
        blogs
      </NuxtLink>
      &nbsp;or
      <NuxtLink to="/manga" class="underline underline-offset-2">
        manga list
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
        Send me a meme
        <Icon
          name="iconoir:arrow-tr"
          class="ml-auto group-hover:scale-150 duration-200"
        />
      </UButton>
      <UButton
        :padded="false"
        color="white"
        variant="link"
        to="/blogs"
        class="hidden sm:flex"
      >
        Check out my blogs
        <Icon
          name="iconoir:arrow-tr"
          class="ml-auto group-hover:scale-150 duration-200"
        />
      </UButton>
      <UButton
        :padded="false"
        color="white"
        variant="link"
        to="/manga"
        class="hidden sm:flex"
      >
        God tier manga
        <Icon
          name="iconoir:arrow-tr"
          class="ml-auto group-hover:scale-150 duration-200"
        />
      </UButton>
      <p class="text-gray-400 text-sm ml-auto">RinYato © 2023</p>
    </div>
  </footer>
</template>
