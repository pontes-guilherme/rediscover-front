
<template>
  <div class="techs mt-10">
    <div class="title text-body-1">
      Select the technologies involved in this project
    </div>

    <div class="tech-chips mt-2 d-flex">
      <div
          :class="`chip tech-chip font-weight-black py-2 px-4 rounded-pill ${isTechSelected(tech) ? 'selected' : ''}`"
          @click="toggleTechnology(tech)"
          v-for="tech in technologies"
          :key="tech"
      >
        {{ tech }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const selectedTechnologies = ref<string[]>([]);

const toggleTechnology = (technology: string) => {
  if (selectedTechnologies.value.includes(technology)) {
    selectedTechnologies.value = selectedTechnologies.value.filter(tech => tech != technology)
  } else {
    selectedTechnologies.value.push(technology)
  }
}

const isTechSelected = (technology: string) => {
  return selectedTechnologies.value.includes(technology)
}

const technologies = [
  'Java',
  'Spring Boot',
  'PHP',
  'Laravel',
  'Symphony',
  'Zend',
  'Python',
  'Flask',
  'FastAPI',
  'Javascript',
  'Node',
  'Express',
  'NestJS',
  'ReactJS',
  'React Native',
  'VueJS',
  'Angular',
  'Svelte',
  'PostgreSQL',
  'Mysql',
  'MongoDB',
];
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
