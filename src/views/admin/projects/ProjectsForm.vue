<template>
  <v-container class="fill-height">
    <v-responsive class="text-center fill-height pa-5">

      <header class="mb-10">
        <h1 class="d-flex justify-start text-primary">{{ moduleName }}</h1>
      </header>

      <v-card
        class="py-5 px-5 elevation-5"
        variant="elevated"
      >
        <v-form ref="formElement">
          <v-container>

            <v-row>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="repository_owner"
                  label="Repository Owner"
                  type="text"
                  aria-disabled="true"
                  readonly
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="repository_name"
                  label="Repository Name"
                  type="text"
                  aria-disabled="true"
                  readonly
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="repository_url"
                  label="Project URL"
                  type="text"
                  aria-disabled="true"
                  readonly
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="project_abandonment_status"
                  label="Project Status"
                  type="text"
                  aria-disabled="true"
                  readonly
                />
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="abandonment_reason"
                  label="Project Abandonment Reason"
                  type="text"
                  aria-disabled="true"
                  readonly
                />
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="project_future"
                  label="Project Future"
                  type="text"
                  aria-disabled="true"
                  readonly
                />
              </v-col>

              <v-col cols="12 text-left">
                <h5>Tags</h5>

                <v-chip
                  class="ma-2"
                  color="primary"
                  v-for="tag in tags"
                  :key="tag.id"
                >
                  {{ tag.name }}
                </v-chip>
              </v-col>

              <v-col cols="12 text-left">
                <h5>Technologies</h5>

                <v-chip
                  class="ma-2"
                  color="primary"
                  v-for="technology in technologies"
                  :key="technology.id"
                >
                  {{ technology.name }}
                </v-chip>
              </v-col>
            </v-row>

          </v-container>
        </v-form>
      </v-card>

    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>

import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {useProjectFormStore} from "@/store/pages/admin/projects/form.store";
import {storeToRefs} from "pinia";

const route = useRoute();
const store = useProjectFormStore();

const {
  moduleName,
  loadData,
} = store;

const {
  id,
  repository_url,
  repository_name,
  repository_owner,
  abandonment_reason,
  project_abandonment_status,
  project_future,
  tags,
  technologies,
} = storeToRefs(store);

onMounted(async () => {

  const params = route.params;

  if (params?.id) {
    const idParam: number = typeof params.id === "string"
      ? parseInt(params.id)
      : parseInt(params.id[0]);

    id.value = idParam;

    loadData(idParam);
  }
})
;

</script>
