<template>
  <v-app id="inspire">
    <AppBar/>

    <v-main class="bg-grey-lighten-3 d-flex flex-column">
      <MainContainer/>

      <v-snackbar
          v-model="snackbarStore.snackbar"
          :timeout="snackbarStore.timeout"
          :variant="snackbarStore.variant"
          :color="snackbarStore.color"
          :location="snackbarStore.location"
          :position="snackbarStore.position"
          style="margin-bottom: 120px"
      >
        {{ snackbarStore.validationMessage }}
      </v-snackbar>

      <Footer/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppBar from "@/layouts/main/components/AppBar.vue";
import MainContainer from "@/layouts/main/components/MainContainer.vue";
import Footer from "@/layouts/main/components/Footer.vue";
import {useSnackbarStore} from "@/store/components/snackbar.store";

const snackbarStore = useSnackbarStore();
</script>

<style scoped lang="scss">

</style>
