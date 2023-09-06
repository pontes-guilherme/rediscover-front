<template>
  <div class="banner">
    <div class="banner__content pa-4">
      <h1 class="text-black font-weight-bold text-sm-h5 text-md-h3">I did not find my project</h1>

      <RouterLink class="mt-6 text-decoration-none" to="/projects/add">
        <v-btn-primary class="mt-6 d-flex justify-center align-center">Add a project</v-btn-primary>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  background-image: url('@/assets/pictures/main_banner.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    min-width: 40vw;
    min-height: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
</script>
