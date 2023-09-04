<template>
  <v-app>
    <app-bar />
    <left-drawer />
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from '@/layouts/admin/authenticated/components/View.vue'
import LeftDrawer from "@/layouts/admin/authenticated/components/LeftDrawer.vue";
import AppBar from "@/layouts/admin/authenticated/components/AppBar.vue";

</script>
