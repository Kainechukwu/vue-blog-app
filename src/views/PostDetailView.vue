<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <RouterLink class="mb-8" to="/">
          <div class="flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
            >
              <path fill="#eeeeee" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" />
              <path
                fill="#eeeeee"
                d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
              /></svg
            >Go Back
          </div>
        </RouterLink>

        <div v-if="loading" class="mt-4"><PostLoader /></div>
        <article
          v-if="loading === false && post !== null"
          class="mt-4 p-3 flex space-x-4 cursor-pointer rounded-lg"
        >
          <div
            class="rounded-full bg-slate-700 h-10 w-10 flex items-center justify-center text-xl font-bold border-light border"
          >
            {{ post.author[0] }}
          </div>
          <div class="flex flex-1 flex-col items-start justify-between">
            <div class="group relative">
              <h3 class="text-lg font-semibold leading-6 group-hover:text-gray-600">
                <h5 className="text-green">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </h5>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-light">
                {{ post.description }}
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <div class="text-sm leading-6">
                <p class="font-semibold text-green">
                  <span class="text-light">Author: </span>
                  <span>
                    <span class="absolute inset-0" />
                    {{ post.author }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import { debounce } from 'lodash'
import { usePostStore } from '@/stores/post'
import PostLoader from '@/components/loaders/PostLoader.vue'

onMounted(() => {
  debouncedFetch()
})

const route = useRoute()
const store = usePostStore()
const id = computed(() => route.params.id as string)
const post = ref(null)
const loading = ref(true)

const debouncedFetch = debounce(() => {
  post.value = store.getPostById(id.value)
  loading.value = false
}, 2000)
</script>

<style scoped></style>
