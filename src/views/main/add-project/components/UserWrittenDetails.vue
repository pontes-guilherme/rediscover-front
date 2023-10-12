<template>
  <div class="user-written-details mt-16">
    <template v-if="loading">
      <v-skeleton-loader type="paragraph"></v-skeleton-loader>
      <v-skeleton-loader type="article"></v-skeleton-loader>
      <v-skeleton-loader type="paragraph"></v-skeleton-loader>
      <v-skeleton-loader type="article"></v-skeleton-loader>
      <br>
      <div class="d-flex flex-wrap">
        <v-skeleton-loader
            class="flex-1"
            type="chip"
            v-for="_ in [1,2,3,4]"
            :key="_"
            style="min-width: 100px; margin: 0"
        ></v-skeleton-loader>

      </div>

      <div class="d-flex flex-wrap">
        <v-skeleton-loader
            class="flex-1"
            type="chip"
            v-for="_ in [1,2,3,4,5,6,7,8]"
            :key="_"
            style="min-width: 100px; margin: 0"
        ></v-skeleton-loader>
      </div>
    </template>

    <template v-if="!loading">
      <div class="title text-center">
        <h2>Give more details about the project</h2>
      </div>

      <div class="project-status mt-16">
        <div class="title text-body-1">
          What do you consider to be the current status of this project?
        </div>

        <StatusOptions @change-status="handleChangeStatus"/>
      </div>

      <Questions/>

      <Technologies/>

      <Tags/>
    </template>
  </div>
</template>

<script setup lang="ts">
import StatusOptions from "@/views/main/add-project/components/StatusOptions.vue";
import Questions from "@/views/main/add-project/components/Questions.vue";
import Technologies from "@/views/main/add-project/components/Technologies.vue";
import Tags from "@/views/main/add-project/components/Tags.vue";
import {useProjectAddStore} from "@/store/pages/main/projects/add.store";
import {storeToRefs} from "pinia";
import {ProjectStatusEnum} from "@/enums/project-status.enum";

defineProps({
  loading: {
    type: Boolean,
    required: false,
    default: false,
  }
})

const store = useProjectAddStore();
const {
  project_status
} = storeToRefs(store)

const handleChangeStatus = (status: ProjectStatusEnum) => {
  project_status.value = status
}

</script>

<style scoped lang="scss">

</style>
