<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-w-screen px-8">
    <header class="sticky top-0 z-10">
      <div class="">
        <nav class="flex">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/create">Add Post</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: var(--vt-c-black);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;

    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
