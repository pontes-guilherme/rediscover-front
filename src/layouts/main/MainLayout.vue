<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" flat>
      <div class="logo ml-10">
        <span class="text-primary font-weight-bold text-sm-h6">REDISCOVER</span>
      </div>

      <v-spacer></v-spacer>

      <div class="nav-items">
        <RouterLink
            class="nav-item text-decoration-none text-primary"
            :to="link.path"
            v-for="link in links"
            :key="link.path"
        >
          <v-btn variant="text">{{ link.title }}</v-btn>
        </RouterLink>
      </div>

      <v-spacer></v-spacer>

      <div class="avatar">
        <v-avatar
            class="hidden-sm-and-down mr-10"
            color="grey-darken-1"
            size="32"
        ></v-avatar>
      </div>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3 d-flex flex-column">
      <v-container class="ma-0 pa-0 h-100" fluid>
        <router-view v-slot="{ Component }">
          <v-fade-transition hide-on-leave>
            <div class="h-100" :key="route.name?.toString()">
              <component :is="Component"/>
            </div>
          </v-fade-transition>
        </router-view>
      </v-container>

      <v-footer class="bg-tertiary text-center d-flex flex-column mt-10 pa-10 flex-shrink-0">
        <div class="pt-0">
          <RouterLink
              to="/admin"
              class="text-white text-decoration-none"
          >
            Access admin panel
          </RouterLink>
        </div>

        <v-divider></v-divider>
      </v-footer>
    </v-main>

  </v-app>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'

// Utilities
const route = useRoute()

const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Discover',
    path: '/discover',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
]
</script>

<style scoped lang="scss">
.avatar, .logo {
  width: 15%;
}

.avatar {
  display: flex;
  justify-content: flex-end;
}

.nav-items {
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-item {
    margin: 0 10px;
    min-width: 120px;

    button {
      width: 100%;
    }
  }
}
</style>
