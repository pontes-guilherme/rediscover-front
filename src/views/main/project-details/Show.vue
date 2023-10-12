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

        <ProjectInfos
            :repository_owner="repository_owner"
            :repository_name="repository_name"
            :description="description"
            :tags="selectedTags"
            :technologies="selectedTechnologies"
        />
      </section>

      <section class="project-status">
        <div class="section__title mb-5">
          <h1>Project Status</h1>
        </div>

        <ProjectStatus
            :abandonment_reason="project_abandonment_reason"
            :project_future="project_future"
            :project_abandonment_status="project_abandonment_status"
        />
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


    <div class="additional-actions mt-16 d-flex flex-column align-center">
      <div class="w-50">
        <v-divider></v-divider>
      </div>
      <div class="buttons d-flex justify-space-between mt-10">
        <v-btn
            color="primary"
            class="mr-5"
        >
          <v-icon>mdi-check</v-icon>
          <span class="ml-2">I am the maintainer</span>
        </v-btn>

        <v-btn
            color="primary"
            class="mr-5"
        >
          <v-icon>mdi-star</v-icon>
          <span class="ml-2">I want to collaborate</span>
        </v-btn>

        <v-btn
            color="primary"
            class="mr-5"
        >
          <v-icon>mdi-share-variant</v-icon>
          <span class="ml-2">I want to share</span>
        </v-btn>
      </div>
    </div>

    <v-btn class="floating-btn" color="black" icon="mdi-github" size="72" rounded="xxl"></v-btn>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import ProjectInfos from "./components/ProjectInfos.vue";
import ProjectRatings from "@/views/main/project-details/components/ProjectRatings.vue";
import ProjectStatus from "@/views/main/project-details/components/ProjectStatus.vue";
import ProjectComments from "@/views/main/project-details/components/ProjectComments.vue";
import ProjectCard from "@/components/main/ProjectCard.vue";
import {useProjectDetailsStore} from "@/store/pages/main/projects/details.store";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import {generateGradient, hashString} from "@/utils/colors.util";

const route = useRoute()

const projectStore = useProjectDetailsStore()
const {
  loading,
  id,
  repository_id,
  repository_url,
  repository_owner,
  repository_name,
  project_abandonment_status,
  project_abandonment_reason,
  project_future,
  description,
  selectedTags,
  selectedTechnologies,
} = storeToRefs(projectStore)

const {loadProjectDetails, $resetFillableFields} = projectStore


const favorite = ref(false);

const toggleFavorite = () => {
  favorite.value = !favorite.value;
}

onMounted(() => {
  $resetFillableFields()

  if (typeof route.params.id === 'string') {
    id.value = parseInt(route.params.id)
  }

  loadProjectDetails()
})
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

.additional-actions {
  width: 100%;
  display: flex;
  justify-content: center;

  .buttons {
    .v-btn {
      width: 250px;
    }

    @media (max-width: 1200px) {
      display: block !important;

      .v-btn {
        display: block;
        margin-bottom: 20px;
      }
    }

    @media (max-width: 768px) {
      width: 100%;

      .v-btn {
        width: 100%;
      }
    }
  }
}

.floating-btn {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    right: 10px;
  }
}
</style>
