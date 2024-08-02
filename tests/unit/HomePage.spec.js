import { shallowMount } from '@vue/test-utils';
import HomePage from '../../src/views/HomePage.vue';
import PostsComponent from '../../src/components/PostsComponent.vue';

describe('HomePage.vue', () => {
  it('renders PostsComponent', () => {
    //shallowMount from @vue/test-utils to mount the component.
    const wrapper = shallowMount(HomePage);

    const postsComponent = wrapper.findComponent(PostsComponent);
    expect(postsComponent.exists()).toBe(true);
  });
});
