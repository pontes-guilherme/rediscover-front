<template>
  <v-container class="fill-height">
    <v-responsive class="text-center fill-height pa-5">

      <header class="mb-10">
        <h1 class="d-flex justify-start text-primary">Usuário</h1>
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
                  label="Nome"
                  type="text"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  label="E-mail"
                  type="text"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  label="Senha"
                  type="password"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  label="Confirmação de Senha"
                  type="password"
                />
              </v-col>

              <v-col
                cols="12" sm="12" md="4" lg="3"
                offset-md="8" offset-lg="9"
              >
                <v-btn-secondary
                  type="submit"
                  block
                >
                  Registrar
                </v-btn-secondary>
              </v-col>

            </v-row>

          </v-container>
        </v-form>
      </v-card>

    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>

import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";

const id = ref<number | null>(null);

const route = useRoute();

onMounted(async () => {

  const params = route.params;

  if (params?.id) {
    const idParam: number = typeof params.id === "string"
      ? parseInt(params.id)
      : parseInt(params.id[0]);

    id.value = idParam;
  }
})
;

</script>
