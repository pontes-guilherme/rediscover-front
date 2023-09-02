<template>
  <v-app>
    <app-bar />
    <left-drawer />
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from '@/layouts/default/components/View.vue'
import LeftDrawer from "@/layouts/default/components/LeftDrawer.vue";
import AppBar from "@/layouts/default/components/AppBar.vue";

</script>
