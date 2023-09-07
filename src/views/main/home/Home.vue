<template>
  <Banner></Banner>

  <Content>
    <Featured class="mt-10"></Featured>

    <Explore class="mt-16"></Explore>

    <div class="d-flex justify-center align-center">
      <v-btn-primary
          class="mt-16"
      >
        Discover More
      </v-btn-primary>
    </div>
  </Content>
</template>

<script setup lang="ts">
import Banner from "@/views/main/home/components/Banner.vue";
import Content from "@/components/main/Content.vue";
import Featured from "@/views/main/home/components/Featured.vue";
import Explore from "@/views/main/home/components/Explore.vue";
</script>

<style scoped lang="scss">

</style>
