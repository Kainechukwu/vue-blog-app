<template>
  <article
    class="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#00bd7e33] p-3 flex space-x-4 cursor-pointer rounded-lg"
  >
    <div
      class="rounded-full bg-slate-700 h-10 w-10 flex items-center justify-center text-xl font-bold border-light border uppercase"
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
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['post']);

const { post } = props;
</script>

<style lang="scss" scoped></style>
