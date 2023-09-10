<template>
  <div class="page">
    <div class="container">
      <div class="card py-5 px-6 py-sm-10 px-sm-16 my-10 d-flex flex-column justify-center align-center">
        <div class="card__title">
          <p class="text-black font-weight-bold text-sm-h5">Add a project</p>
        </div>

        <div class="content mt-10 w-100">
          <ProjectInfos />

          <UserWrittenDetails />

          <div class="d-flex justify-center align-center">
            <v-btn-primary class="btn-add mt-6">Save</v-btn-primary>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectInfos from "@/views/main/add-project/components/ProjectInfos.vue";
import UserWrittenDetails from "@/views/main/add-project/components/UserWrittenDetails.vue";

</script>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 90%;
  }
}

.card {
  width: 100%;
  background-color: white;
  border-radius: 20px;
  min-width: 50vw;

  @media (max-width: 1200px) {
    min-width: 90%;
  }
}

.btn-add {
  min-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
