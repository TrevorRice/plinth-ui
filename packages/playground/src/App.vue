<template>
  <section class="page">
    <header><h1>Plinth UI Playground</h1></header>
    <nav>
      <section v-for="route in routes" :key="route.path">
        <template v-if="route.children">
          <h3>{{ route.name }}</h3>
          <router-link
            v-for="childRoute in route.children"
            :key="childRoute.path"
            :to="childRoute.path"
          >
            {{ childRoute.name }}
          </router-link>
        </template>
        <router-link v-else :to="route.path">{{ route.name }}</router-link>
      </section>
    </nav>
    <main>
      <router-view />
    </main>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const routes = useRouter().options.routes
    return { routes }
  },
}
</script>

<style>
.page {
  display: grid;
  grid-template-areas:
    'nav header'
    'nav   main';
  grid-template-columns: 150px 1fr;
  gap: 32px;
}

.page > header {
  grid-area: header;
}

.page > nav {
  grid-area: nav;
}

.page > main {
  grid-area: main;
}
</style>
