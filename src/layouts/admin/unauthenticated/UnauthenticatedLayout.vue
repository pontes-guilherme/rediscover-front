<template>
  <v-app>
    <v-main>
      <v-container
        class="ma-0 pa-0 h-100" fluid
      >
        <router-view v-slot="{ Component }">
          <v-fade-transition hide-on-leave>
            <div class="h-100" :key="route.name?.toString()">
              <component :is="Component" />
            </div>
          </v-fade-transition>
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

// Utilities
const route = useRoute()
</script>
