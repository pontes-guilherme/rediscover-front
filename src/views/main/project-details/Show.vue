<template>
  <div class="page">
    <div class="container">
      <section class="section project-infos">
        <div class="section__title mb-5 d-flex justify-space-between">
          <h1>Project Details</h1>

          <div class="d-flex align-end">
            <v-btn
              variant="text"
              icon="mdi-star"
              :color="`${favorited ? '#E1C109' : 'grey-darken-1'}`"
              @click="toggleFavorite()"
            ></v-btn>
          </div>
        </div>

        <ProjectInfos/>
      </section>

      <section class="project-infos">
        <div class="section__title mb-5">
          <h1>Project Ratings</h1>
        </div>

        <ProjectRatings/>
      </section>

      <section class="project-status">
        <div class="section__title mb-5">
          <h1>Project Status</h1>
        </div>

        <ProjectStatus/>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import ProjectInfos from "./components/ProjectInfos.vue";
import ProjectRatings from "@/views/main/project-details/components/ProjectRatings.vue";
import ProjectStatus from "@/views/main/project-details/components/ProjectStatus.vue";

const favorited = ref(false);

const toggleFavorite = () => {
  favorited.value = !favorited.value;
}
</script>


<style scoped lang="scss">
.page {
  padding: 100px;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 30px;
  }
}

.container {
  width: 100%;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: masonry;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}
</style>
