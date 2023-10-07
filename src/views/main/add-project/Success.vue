<template>
  <v-row class="text-center h-100" justify="center">
    <v-col class="d-flex align-center justify-center w-100">
      <div class="content w-50">
        <v-icon class="mb-4" size="200" color="green">mdi-check-circle</v-icon>

        <div class="title mb-4">Project Added Successfully!</div>

        <div class="subtitle mb-10">
          Your project has been added successfully. <br>
          You will be redirected to the home page shortly.
        </div>

        <div class="buttons">
          <v-btn variant="text" @click="addAnotherProject">Add Another Project</v-btn>
        </div>

        <div class="progress mt-16 mx-10">
          <v-progress-linear
              color="primary"
              height="4"
              :model-value="progress"
          ></v-progress-linear>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onBeforeUnmount, onMounted, ref} from "vue";

const router = useRouter();
const progress = ref(0);
const interval = ref();

function addAnotherProject() {
  router.replace({name: 'main.project.add'})
}

const incrementProgress = () => {
  interval.value = setInterval(() => {
    progress.value += 1;

    if (progress.value >= 100) {
      clearInterval(interval.value);
      redirectUser();
    }
  }, 50);
};

const redirectUser = () => {
  router.replace({name: 'main.home'})
};


onMounted(incrementProgress);

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>

<style scoped lang="scss">
.success-screen {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 2rem;
  font-weight: bold;
}

.subtitle {
  color: #666;
}

.loader-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
