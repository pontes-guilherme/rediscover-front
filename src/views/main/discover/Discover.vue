<template>
  <Content>
    <div class="page mt-10">
      <div class="page-header">
        <div class="search-bar mx-3">
          <v-text-field
              v-model="search"
              label="Search"
              variant="solo"
          />
        </div>
        <div class="search-info d-flex justify-space-between align-center">
          <div class="results-count px-4">
            <span class="text-body-2">{{ allProjects.length }} results found</span>
          </div>

          <div class="actions">
            <v-btn variant="plain" @click="activateModal">
              <v-icon>mdi-filter</v-icon>
              Filter
            </v-btn>
          </div>
        </div>
      </div>

      <div class="page-content mt-16">
        <template v-if="!loading && allProjects.length == 0">
          <div class="no-results mx-auto text-center w-100 h-100 d-flex justify-center align-center mt-16">
            <span class="text-h6 text-grey-darken-2 mt-16">No results found</span>
          </div>
        </template>

        <div class="projects">
          <template v-if="loading">
            <template v-for="skeleton in [1,2,3,4,5,6]" :key="skeleton">
              <v-skeleton-loader
                  class="skeleton mx-auto border w-100"
                  type="image, article"
              ></v-skeleton-loader>
            </template>
          </template>

          <template v-if="!loading && allProjects">
            <template v-for="(project, i) in allProjects" :key="i">
              <ProjectCard
                  :project="project"
                  :tags="project.tags"
                  :technologies="project.technologies"
              />
            </template>
          </template>
        </div>
      </div>
    </div>

    <ModalWithToolbar v-model:active="modalActive">
      <FilterModal @close="modalActive = false"/>
    </ModalWithToolbar>
  </Content>
</template>

<script setup lang="ts">
import {computed, ComputedRef, onMounted, ref} from "vue";
import Content from "@/components/main/Content.vue";
import ProjectCard from "@/components/main/ProjectCard.vue";
import FilterModal from "@/views/main/discover/components/FilterModal.vue";
import ModalWithToolbar from "@/components/main/ModalWithToolbar.vue";
import {useProjectDetailsStore} from "@/store/pages/main/projects/details.store";
import {storeToRefs} from "pinia";
import {Technology} from "@/models/Technology.model";
import {Tag} from "@/models/Tag.model";

const projectStore = useProjectDetailsStore()
const {
  loading,
  allProjects,
  selectedTechnologies,
  selectedTags,
} = storeToRefs(projectStore)

const {loadAllProjects} = projectStore

const search = ref('')
const modalActive = ref(false)

const activateModal = () => {
  modalActive.value = true
}

onMounted(() => {
  loadAllProjects()
})
</script>

<style scoped lang="scss">
.page-header {
  padding: 0 20%;

  @media (max-width: 1024px) {
    padding: 0 10%;
  }

  @media (max-width: 768px) {
    padding: 0 5%;
  }
}

.page-content {
  padding: 0 15%;

  @media (max-width: 1024px) {
    padding: 0 5%;
  }

  @media (max-width: 768px) {
    padding: 0 2%;
  }
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  align-items: center;

  :deep(.v-card), .skeleton {
    width: 100%;
  }

  .skeleton {
    border-radius: 10px;

    :deep(.v-skeleton-loader__image) {
      border-radius: inherit;
    }
  }

  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);

    :deep(.v-card) {
      max-width: 95%;
    }
  }
}
</style>
