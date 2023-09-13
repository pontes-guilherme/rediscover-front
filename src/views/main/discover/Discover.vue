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
            <span class="text-body-2">{{ projects.length }} results found</span>
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
        <div class="projects">
          <template v-for="(project, i) in projects" :key="i">
            <ProjectCard/>
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
import {ref} from "vue";
import Content from "@/components/main/Content.vue";
import ProjectCard from "@/components/main/ProjectCard.vue";
import FilterModal from "@/views/main/discover/components/FilterModal.vue";
import ModalWithToolbar from "@/components/main/ModalWithToolbar.vue";

const search = ref('')
const modalActive = ref(false)

const projects = ref([1, 2, 3, 4, 5, 6])

const activateModal = () => {
  modalActive.value = true
}
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

  :deep(.v-card) {
    width: 100%;
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
