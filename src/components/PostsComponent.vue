<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-light sm:text-4xl">Blog Posts</h2>
        <p class="mt-2 text-lg leading-8 text-light">
          Learn how to grow your business with our expert advice.
        </p>
        <div class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
          <div v-for="post in posts" :key="post.id" class="">
            <PostCard :post="post" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostCard from './PostCard.vue'
const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',

    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',

    author: 'Michael Foster'
  },
  {
    id: 2,
    title: 'Boost your conversion rate',

    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',

    author: 'Jane Foster'
  }
]
</script>
