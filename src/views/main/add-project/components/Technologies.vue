<template>
  <div class="techs mt-10">
    <div class="title text-body-1">
      Select the technologies involved in this project
    </div>

    <div class="tech-chips mt-2 d-flex">
      <div
          :class="`chip tech-chip font-weight-black py-2 px-4 rounded-pill ${isTechnologySelected(tech) ? 'selected' : ''}`"
          @click="toggleTechnology(tech)"
          v-for="tech in technologies"
          :key="tech.id"
      >
        {{ tech.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useProjectAddStore} from "@/store/pages/main/projects/add.store";
import {storeToRefs} from "pinia";

const store = useProjectAddStore();
const {isTechnologySelected, toggleTechnology} = store
const {technologies} = storeToRefs(store)
</script>

<style scoped lang="scss">
@import '@/assets/css/chip';

.tech-chips {
  flex-wrap: wrap;

  max-height: 300px;
  overflow-y: auto;

  padding-right: 10px;

  .tech-chip {
    background-color: rgb(var(--v-theme-grey));
    margin-bottom: 10px;

    margin-right: 10px;

    &.selected {
      background-color: rgb(var(--v-theme-primary-lighten-3));
      color: white;
    }
  }
}
</style>
