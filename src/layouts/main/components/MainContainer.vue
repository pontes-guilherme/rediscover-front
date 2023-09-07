<template>
  <v-container class="ma-0 pa-0 h-100" fluid>
    <router-view v-slot="{ Component }">
      <v-fade-transition hide-on-leave>
        <div class="h-100" :key="route.name?.toString()">
          <component :is="Component"/>
        </div>
      </v-fade-transition>
    </router-view>
  </v-container>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()

</script>

<style scoped lang="scss">

</style>
