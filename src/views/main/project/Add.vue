<template>
  <div class="container">
    <div class="card py-5 px-6 py-sm-10 px-sm-16 my-10 d-flex flex-column justify-center align-center">
      <div class="card__title">
        <p class="text-black font-weight-bold text-sm-h5">Add a project</p>
      </div>

      <div class="content mt-10 w-100">

        <v-row>
          <v-col cols="12">
            <v-text-field
                class="w-100"
                v-model="projectUrl"
                label="URL do repositório"
                required
            />
          </v-col>
        </v-row>

        <div class="d-flex justify-center align-center">
          <v-btn-primary class="btn-add mt-6">Add</v-btn-primary>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const projectUrl = ref('');
</script>

<style scoped lang="scss">
.card {
  background-color: white;
  border-radius: 20px;
  min-width: 50vw;

  @media (max-width: 1200px) {
    min-width: 90%;
  }
}

.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-add {
  min-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
