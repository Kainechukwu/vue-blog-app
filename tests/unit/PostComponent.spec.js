
// Mock components
// tests/unit/HomePage.spec.js
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { usePostStore } from '@/stores/post';

// Mock components with default export
vi.mock('@/components/loaders/PostsLoader.vue', () => ({
  default: { template: '<div class="posts-loader"></div>' },
}));

vi.mock('@/components/PostCard.vue', () => ({
  default: { template: '<div class="post-card"></div>', props: ['post'] },
}));

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/post-detail/:id', name: 'PostDetail' },
  ],
});

describe('HomePage.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    router.push('/');
    router.isReady();
  });

  it('renders PostsLoader when loading', () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [router, createPinia()],
      },
    });

    const store = usePostStore();
    store.$patch({ posts: [] });
    
    expect(wrapper.findAll('.posts-loader').length).toBe(2);
  });

 

 
});
