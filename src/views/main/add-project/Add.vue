<template>
  <div class="container">
    <div class="card py-5 px-6 py-sm-10 px-sm-16 my-10 d-flex flex-column justify-center align-center">
      <div class="card__title">
        <p class="text-black font-weight-bold text-sm-h5">Add a project</p>
      </div>

      <div class="content mt-10 w-100">
        <v-form
            v-model="formValid"
            @submit.prevent="onSubmit"
        >
          <v-row>
            <v-col cols="12">
              <v-text-field
                  class="w-100"
                  v-model="projectUrl"
                  label="Project URL"
                  :rules="[
                (v) => {
                  if (!v) {
                    return 'URL is required'
                  }

                  return true
                },
                (v) => {
                  const urlRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+(\/)?$/;

                  if (!urlRegex.test(v)) {
                    return 'Invalid URL'
                  }

                  return true
                },
              ]"
                  required
              />
            </v-col>
          </v-row>

          <div class="d-flex justify-center align-center">
            <v-btn-primary
                type="submit"
                class="btn-add mt-6"
                :disabled="!formValid"
                :loading="loading"
            >
              Add
            </v-btn-primary>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useProjectAddStore} from "@/store/pages/main/projects/add.store";
import {useSnackbarStore} from "@/store/components/snackbar.store";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();
const store = useProjectAddStore();

const snackbarStore = useSnackbarStore();
const {error} = snackbarStore

const {isUrlValid} = store;
const {loading, projectUrl} = storeToRefs(store)

const formValid = ref(false)

const onSubmit = async () => {
  const valid = await validateUrl()

  if (!valid) {
    error('Invalid URL')
    return
  }

  router.push(`/projects/add/details?url=${projectUrl.value}`)
}

const validateUrl = async () => {
  let valid = false;

  try {
    valid = await isUrlValid()

    return valid
  } catch (e) {
    console.log(e)
    return false
  }
}
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
