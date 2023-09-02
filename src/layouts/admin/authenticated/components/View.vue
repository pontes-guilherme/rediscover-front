<template>
  <v-main>
    <v-container
      class="pa-4 pa-sm-6 pa-md-8"
      tag="section"
      fluid
    >
      <router-view v-slot="{ Component }">
        <v-fade-transition hide-on-leave>
          <div :key="route.name?.toString()">
            <component :is="Component" />
          </div>
        </v-fade-transition>
      </router-view>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router'

// Utilities
const route = useRoute()
</script>
