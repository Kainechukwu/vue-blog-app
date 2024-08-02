import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// import { IPost } from '@/utils'
export const usePostStore = defineStore('posts', () => {
  const posts = ref([
    {
      id: '1',
      title: 'Boost your conversion rate',

      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',

      author: 'Michael Foster'
    },
    {
      id: '2',
      title: 'Network with your peers',

      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',

      author: 'Jane Foster'
    }
  ])
  const name = ref('My Posts')
  function addPost(post) {
    posts.value.push(post)
  }

  function getPostById(id) {
    return posts.value.find(post => post.id === id)
  }

  return { posts, addPost, getPostById }
}, {persist: true,})
