<template>
  <div class="user-written-details mt-16">
    <div class="title text-center">
      <h2>Give more details about the project</h2>
    </div>

    <div class="project-status mt-16">
      <div class="title text-body-1">
        What do you consider to be the current status of this project?
      </div>

      <StatusOptions/>
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
</script>

<style scoped lang="scss">

</style>
