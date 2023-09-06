<template>
  <v-app id="inspire">
    <v-app-bar
      class="px-3"
      flat
      density="compact"
    >
      <v-avatar
        color="grey-darken-1"
        class="hidden-md-and-up"
        size="32"
      ></v-avatar>

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
    </v-main>
  </v-app>
</template>

<script setup>
import {useRoute} from 'vue-router'

// Utilities
const route = useRoute()

const links = [
  'Discover',
  'About',
  'Contact',
]
</script>
