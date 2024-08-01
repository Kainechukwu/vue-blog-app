import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      
      component: () => import('../views/CreatePost.vue')
    },
    {
      path: '/post-detail/:id',
      name: 'post detail',
      
      component: () => import('../views/PostDetailView.vue')
    },
  ]
})

export default router
