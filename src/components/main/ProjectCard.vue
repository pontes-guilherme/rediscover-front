<template>
  <v-card class="card mx-auto" variant="flat" @click="goToProject">
    <div class="card__image position-relative">
      <div class="tags position-absolute d-flex">
        <div class="chip">PHP</div>
        <div class="chip">Back-end</div>
      </div>
    </div>

    <v-card-title class="mt-5">
      Project Name - Application
    </v-card-title>

    <v-card-subtitle class="mt-3 mb-5">
      Lorem Victrix, cacula, et historia. Lorem Victrix, cacula, et historia
    </v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

const goToProject = () => {
  router.push('/projects/1')
}
</script>

<style scoped lang="scss">
.card {
  cursor: pointer;
  user-select: none;

  &__image {
    background-color: rgb(var(--v-theme-grey));

    height: 220px;
    border-radius: inherit;

    .tags {
      top: 20px;
      left: 20px;
    }
  }
}

.chip {
  background-color: white;
  padding: 5px 10px;
  border-radius: 15px;
  color: black;
  font-size: 1rem;
  font-weight: bold;

  &:not(:first-child) {
    margin-left: 10px;
  }
}
</style>
