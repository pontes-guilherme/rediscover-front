<template>
  <v-app-bar class="px-3">

    <RouterLink
      class="nav-item text-decoration-none text-primary"
      to="/"
    >
      <div class="logo ml-10">
        <span class="text-primary font-weight-bold text-sm-h6">REDISCOVER</span>
      </div>
    </RouterLink>

    <v-spacer></v-spacer>

    <div class="nav-items" v-if="!hideMenuAndShowDrawer">
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

    <div class="avatar d-flex justify-center align-center">
      <v-menu location="bottom">
        <template v-slot:activator="{ props }">
          <v-avatar
            class="hidden-sm-and-down mr-10"
            color="grey-darken-1"
            size="32"
            v-bind="props"
          ></v-avatar>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title class="d-flex align-center">
              <v-btn
                color="primary"
                variant="text"
                class="w-100"
                @click="router.push('/profile/projects')"
              >
                <span class="ml-2">My Projects</span>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="d-flex align-center">
              <v-btn
                color="primary"
                variant="text"
                class="w-100"
                @click="router.push('/profile/comments')"
              >
                <span class="ml-2">My Comments</span>
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="d-flex align-center">
              <v-btn
                color="primary"
                variant="text"
                class="w-100"
                @click="logout"
              >
                <span class="ml-2">Log Out</span>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-app-bar-nav-icon
        class="text-primary"
        variant="text"
        v-if="hideMenuAndShowDrawer"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </div>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
  >
    <v-list>
      <v-list-item v-for="link in [...links, ...loggedLinks]" :key="link.path">
        <RouterLink
          class="nav-item text-decoration-none text-primary w-100"
          :to="link.path"
        >
          <v-btn class="w-100" variant="text">{{ link.title }}</v-btn>
        </RouterLink>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {computed, ref} from "vue";
import {useDisplay} from "vuetify";

const router = useRouter()
const {smAndDown} = useDisplay()

const drawer = ref(false)

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

const loggedLinks = [
  {
    title: 'My Projects',
    path: '/profile/projects',
  },
  {
    title: 'My Comments',
    path: '/profile/comments',
  },
]

const logout = () => {
}

const hideMenuAndShowDrawer = computed(() => {
  return !!smAndDown.value
})
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

.v-avatar {
  cursor: pointer;
}
</style>
