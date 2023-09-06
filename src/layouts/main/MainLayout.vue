<template>
  <v-app id="inspire">
    <v-app-bar
        class="px-3"
        flat
        density="compact"
    >
      <v-spacer></v-spacer>

      <v-tabs centered color="primary">
        <v-tab
            v-for="link in links"
            :key="link"
            :text="link"
        ></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <v-avatar
          class="hidden-sm-and-down"
          color="grey-darken-1"
          size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container class="ma-0 pa-0" fluid>
        <router-view v-slot="{ Component }">
          <v-fade-transition hide-on-leave>
            <div :key="route.name?.toString()">
              <component :is="Component"/>
            </div>
          </v-fade-transition>
        </router-view>
      </v-container>

      <v-footer class="bg-tertiary text-center d-flex flex-column mt-10 pa-10">
        <div>
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              :icon="icon"
              variant="text"
          ></v-btn>
        </div>

        <div class="pt-0">
          <RouterLink to="/admin" class="text-white text-decoration-none">Access admin panel</RouterLink>
        </div>

        <v-divider></v-divider>
      </v-footer>
    </v-main>

  </v-app>
</template>

<script setup>
import {useRoute} from 'vue-router'

// Utilities
const route = useRoute()

const links = [
  'Home',
  'Discover',
  'About',
  'Contact',
]
</script>
