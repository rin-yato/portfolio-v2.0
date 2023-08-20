<template>
  <main
    class="max-w-3xl space-y-16 border-gray-700 md:bg-gray-500/20 md:border-2 md:rounded-xl py-5 px-7 mx-auto md:my-[20vh] min-h-screen"
  >
    <Navbar />
    <NuxtPage />
  </main>
</template>

<style>
h2 a {
  text-decoration: none !important;
}
h2 a:hover {
  text-decoration: underline !important;
  text-underline-offset: 2px !important;
}

h2 a {
  font-size: 1.25rem !important;
  font-weight: 600 !important;
}

.prose-a:hover {
  color: #4ade80 !important;
}

.prose-li {
  margin: 8px 0 !important;
}
</style>
