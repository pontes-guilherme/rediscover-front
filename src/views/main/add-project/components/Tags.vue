<template>
  <div class="tags mt-10">
    <div class="title text-body-1">
      Select the tags that fit this project
    </div>

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
</template>

<script setup lang="ts">
import {ref} from "vue";

const selectedTags = ref<string[]>([]);

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

const tags = [
  'Back-End',
  'Front-End',
  'Full Stack',
  'Compilers',
  'Tools',
  'Security',
  'Learn in Public',
];
</script>

<style scoped lang="scss">
@import '@/assets/css/chip';

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
</style>
