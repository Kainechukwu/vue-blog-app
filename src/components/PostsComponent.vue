<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-light sm:text-4xl">Blog Posts</h2>
        <p class="mt-2 text-lg leading-8 text-light">
          Learn how to grow your business with our expert advice.
        </p>
        <div class="mt-10 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
          <div v-if="loading" class="grid grid-cols-1 gap-y-16">
            <PostsLoader />
            <PostsLoader />
          </div>

          <div v-if="posts.length > 0 && !loading" class="space-y-16">
            <div v-for="post in posts" :key="post.id" class="">
              <PostCard :post="post" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostCard from './PostCard.vue'
import { computed, onMounted, ref } from 'vue'
import { usePostStore } from '@/stores/post'
import PostsLoader from '@/components/loaders/PostsLoader.vue'
import { debounce } from 'lodash'

onMounted(() => {
  debouncedFetch()
})

const store = usePostStore()
const loading = ref(true)

const posts = computed(() => store.posts)

const debouncedFetch = debounce(() => {
  // posts.value = computed(() => store.posts)
  loading.value = false
}, 2000)
</script>
