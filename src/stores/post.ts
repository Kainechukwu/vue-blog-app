import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {IPost} from '../utils'
export const useCounterStore = defineStore('posts', () => {
  const posts = ref<IPost[]>([])
  const name = ref('My Posts')
  function addPost(post: IPost) {
    posts.value.push(post)
  }

  return { posts, addPost }
})
