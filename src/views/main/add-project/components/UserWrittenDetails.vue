<template>
  <div class="user-written-details mt-16">
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
