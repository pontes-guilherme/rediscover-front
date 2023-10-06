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
          :key="tag.id"
      >
        {{ tag.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useProjectAddStore} from "@/store/pages/main/projects/add.store";
import {storeToRefs} from "pinia";

const store = useProjectAddStore();
const {isTagSelected, toggleTag} = store
const {tags} = storeToRefs(store)

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
