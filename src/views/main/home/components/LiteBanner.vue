<template>
  <div class="banner">
    <div class="banner__content pa-4">
      <h1 class="text-black font-weight-bold text-h3 text-primary">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
.banner {
  background-image: url('@/assets/pictures/main_banner.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;

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


