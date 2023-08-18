<script setup lang="ts">
const HighlightRepos = [
  {
    name: 'Miracle Diagram',
    description:
      'Create database diagrams using simple and familiar syntax, drag and connect relationships. Your go-to tool for database design.',
    url: 'https://github.com/rin-yato/miracle-diagram',
    tags: ['CodeMirror', 'ReactFlow', 'Lezer'],
  },
  {
    name: 'Miracle AI',
    description:
      'Just give a link to your website and you will get a trained chatbot based on your data, and you can embed on to your website.',
    url: 'https://github.com/rin-yato/ai',
    tags: ['OpenAI', 'LangChain', 'ChromaDB'],
  },
];
</script>

<template>
  <section id="project-hightlights" class="space-y-5">
    <h2 class="font-light leading-relaxed">
      I'm the kind of person who love to learn new things and try new
      technologies. I've worked on some interesting projects, ranging from
      Artificial Intelligence to Blockchain development. I also create and
      contribute to open source projects.
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
      <UButton
        v-for="project in HighlightRepos"
        :key="project.url"
        color="white"
        class="!p-4 flex-col !items-start !justify-start gap-3"
        :to="project.url"
        target="_blank"
      >
        <div class="flex items-center gap-1">
          <Icon name="ph:book-bookmark-fill" size="18" />
          <h3>{{ project.name }}</h3>
        </div>
        <p class="text-gray-400 font-normal text-start">
          {{ project.description }}
        </p>
        <span class="flex gap-2">
          <UBadge
            v-for="tag in project.tags"
            :key="tag + project.url"
            color="gray"
            variant="subtle"
          >
            {{ tag }}
          </UBadge>
        </span>
      </UButton>
    </div>
  </section>
</template>
