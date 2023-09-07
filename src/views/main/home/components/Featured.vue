<template>
  <section class="section featured">
    <div class="title">
      <h1 class="text-md-h4 text-sm-h6 font-weight-bold text-center">Featured</h1>
    </div>

    <div class="projects mt-10">
      <template v-for="(project, i) in [1,2,3,4,5,6]" :key="i">
        <ProjectCard/>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/main/ProjectCard.vue";
</script>

<style scoped lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;

  :deep(.v-card) {
    width: 100%;
  }

  @media (max-width: 1950px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);

    :deep(.v-card) {
      max-width: 75vw;
    }
  }
}
</style>

