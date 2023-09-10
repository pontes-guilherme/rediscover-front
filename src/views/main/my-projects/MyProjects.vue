<template>
  <Content>
    <div class="page mt-16">
      <Projects :projects="projects"/>
    </div>
  </Content>
</template>

<script setup lang="ts">
import Content from "@/components/main/Content.vue";
import Projects from "./components/Projects.vue";
import {ref} from "vue";

const projects = ref([1, 2, 3, 4, 5, 6]);
</script>

<style scoped lang="scss">
.page {
  padding: 0 15%;

  @media (max-width: 1024px) {
    padding: 0 5%;
  }

  @media (max-width: 768px) {
    padding: 0 2%;
  }
}
</style>
