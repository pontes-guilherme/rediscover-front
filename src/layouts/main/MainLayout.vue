<template>
  <v-app id="inspire">
    <AppBar/>

    <v-main class="bg-grey-lighten-3 d-flex flex-column">
      <MainContainer/>

      <Footer />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppBar from "@/layouts/main/components/AppBar.vue";
import MainContainer from "@/layouts/main/components/MainContainer.vue";
</script>

<style scoped lang="scss">

</style>
