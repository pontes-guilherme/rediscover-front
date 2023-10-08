<template>
  <div class="page">
    <div class="container">
      <div class="card py-5 px-6 py-sm-10 px-sm-16 my-10 d-flex flex-column justify-center align-center">
        <div class="card__title">
          <p class="text-black font-weight-bold text-sm-h5">Add a project</p>
        </div>

        <div class="content mt-10 w-100">
          <ProjectInfos/>

          <UserWrittenDetails/>

          <div class="d-flex justify-center align-center">
            <v-btn-primary
                class="btn-add mt-6"
                :disabled="!formValid"
                :loading="loading"
                @click="onSubmit"
            >
              Save
            </v-btn-primary>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectInfos from "@/views/main/add-project/components/ProjectInfos.vue";
import UserWrittenDetails from "@/views/main/add-project/components/UserWrittenDetails.vue";
import {useProjectAddStore} from "@/store/pages/main/projects/add.store";
import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import {useSnackbarStore} from "@/store/components/snackbar.store";

const snackbarStore = useSnackbarStore()

const route = useRoute()
const router = useRouter()
const store = useProjectAddStore();

const {$resetFillableFields, fetchTags, fetchTechnologies, loadProjectDetails, create} = store
const {
  projectUrl,
  formErrors,
  formValid,
  loading,
} = storeToRefs(store)

const onSubmit = async () => {
  create()
      .then(() => {
        router.replace({name: 'main.project.add.success'})
      })
      .catch((error) => {
        const message = error.response.data.message
        snackbarStore.error(message || 'An error occurred while creating the project')
      })
}

onMounted(() => {
  const {query} = route

  if (query.url && typeof query.url === 'string') {
    projectUrl.value = query.url;
  }

  fetchTags()
  fetchTechnologies()

  $resetFillableFields()

  loadProjectDetails()
})
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
