<template>
  <div class="modal__content">
    <section>
      <h1>Technologies</h1>

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
    </section>

    <section class="mt-10">
      <h1>Tags</h1>

      <div class="tags">
        <div class="tag-chips mt-2 d-flex">
          <div
            :class="`chip tag-chip font-weight-black py-2 px-4 rounded-pill ${isTagSelected(tag) ? 'selected' : ''}`"
            @click="toggleTag(tag)"
            v-for="tag in tags"
            :key="tag"
          >
            {{ tag }}
          </div>
        </div>
      </div>
    </section>

    <section class="mt-10">
      <h1>Author</h1>

      <div class="author mt-2">
        <v-text-field
          label="Author"
          variant="filled"
        />
      </div>
    </section>

    <section class="my-10 d-flex justify-center">
      <v-btn
        class="px-16 mb-10"
        color="primary"
        @click="$emit('close')"
      >Filter</v-btn>
    </section>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const selectedTags = ref<string[]>([]);
const selectedTechnologies = ref<string[]>([]);

const toggleTag = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(tech => tech != tag)
  } else {
    selectedTags.value.push(tag)
  }
}

const isTagSelected = (tag: string) => {
  return selectedTags.value.includes(tag)
}

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

const tags = [
  'Back-End',
  'Front-End',
  'Full Stack',
  'Compilers',
  'Tools',
  'Security',
  'Learn in Public',
];


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

.modal__content {
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
}


.tag-chips {
  flex-wrap: wrap;

  max-height: 300px;
  overflow-y: auto;

  padding-right: 10px;

  .tag-chip {
    background-color: rgb(var(--v-theme-grey));
    margin-bottom: 10px;

    margin-right: 10px;

    &.selected {
      background-color: rgb(var(--v-theme-primary-lighten-3));
      color: white;
    }
  }
}

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
