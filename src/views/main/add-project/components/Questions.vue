<template>
  <div class="reason mt-10">
    <div class="title text-body-1">
      Why did you abandoned/inactivated the project?
    </div>

    <v-textarea class="w-100 mt-2" v-model="project_abandonment_reason"></v-textarea>
  </div>

  <div class="reason mt-10">
    <div class="title text-body-1">
      What do you wish for this project's future?
    </div>

    <v-textarea class="w-100 mt-2" v-model="project_future"></v-textarea>
  </div>
</template>

<script setup lang="ts">
import {useProjectAddStore} from "@/store/pages/main/projects/add.store";
import {storeToRefs} from "pinia";

const store = useProjectAddStore();
const {
  project_abandonment_reason,
  project_future,
} = storeToRefs(store)
</script>
