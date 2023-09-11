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
              :color="`${favorite ? '#E1C109' : 'grey-darken-1'}`"
              @click="toggleFavorite()"
            ></v-btn>
          </div>
        </div>

        <ProjectInfos/>
      </section>

      <section class="project-status">
        <div class="section__title mb-5">
          <h1>Project Status</h1>
        </div>

        <ProjectStatus/>
      </section>

      <section class="project-infos">
        <div class="section__title mb-5">
          <h1>Project Ratings</h1>
        </div>

        <ProjectRatings/>
      </section>

      <section class="project-status">
        <div class="section__title mb-5">
          <h1>Project Comments</h1>
        </div>

        <ProjectComments/>
      </section>
    </div>

    <div class="projects-recommended mt-16">
      <div class="section__title mb-5">
        <h2>Related</h2>
      </div>

      <div class="projects mt-5">
        <ProjectCard v-for="project in [1,2,3,4,]" :key="project"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import ProjectInfos from "./components/ProjectInfos.vue";
import ProjectRatings from "@/views/main/project-details/components/ProjectRatings.vue";
import ProjectStatus from "@/views/main/project-details/components/ProjectStatus.vue";
import ProjectComments from "@/views/main/project-details/components/ProjectComments.vue";
import ProjectCard from "@/components/main/ProjectCard.vue";

const favorite = ref(false);

const toggleFavorite = () => {
  favorite.value = !favorite.value;
}
</script>


<style scoped lang="scss">
.page {
  padding: 100px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
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

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

section {
  display: inline-block;
  max-height: 100%;
}

.projects-recommended {
  width: 100%;

  .projects {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;

    :deep(.v-card) {
      width: 100%;
    }

    @media (max-width: 1919px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1100px) {
      grid-template-columns: repeat(1, 1fr);

      :deep(.v-card) {
        max-width: 100vw;
      }
    }
  }
}
</style>
