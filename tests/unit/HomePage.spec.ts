import { shallowMount,  } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HomePage from '../../src/views/HomePage.vue';
import PostsComponent from '../../src/components/PostsComponent.vue';

describe('HomePage.vue', () => {
 
  it('renders PostsComponent', () => {
    //mount from @vue/test-utils to mount the component.
    const wrapper = shallowMount(HomePage);

    const postsComponent = wrapper.findComponent(PostsComponent);
    expect(postsComponent.exists()).toBe(true);
  });
});

 