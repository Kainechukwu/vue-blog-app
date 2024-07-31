<template>
  <article class="flex max-w-xl flex-col items-start justify-between">
    <div class="group relative">
      <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
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
  </article>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface IPost {
  id: number
  title: string
  author: string
  description: string
}

const props = defineProps<{ post: IPost }>()

const { post } = props
</script>

<style lang="scss" scoped></style>
