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
        <v-row align="center">
          <v-col cols="8">
            <v-text-field
                v-model="search"
                label="Buscar"
                variant="underlined"
            />
          </v-col>
          <v-col cols="4">
            <div class="d-flex justify-end">
              <v-btn-secondary
                  @click="router.push(`${moduleBaseUrl}/create`)"
              >
                <v-icon>mdi-plus</v-icon>
                <span v-if="!xs">Adicionar</span>
              </v-btn-secondary>
            </div>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-data-table-server
              v-model:items-per-page="itemsPerPage"
              :headers="headers"
              :items-length="totalItems"
              :items="data"
              :loading="loading"
              item-title="name"
              item-value="name"
              class="elevation-1"
              @update:options="loadItems"
          >
            <template #item.actions="{item}">
              <td class="d-flex justify-end">
                <v-btn-datatable-action
                    @click="router.push(`${moduleBaseUrl}/${item.raw.id}/edit`)"
                >
                  <v-icon>mdi-pencil</v-icon>
                  <v-tooltip
                      activator="parent"
                      location="top"
                  >Editar
                  </v-tooltip>
                </v-btn-datatable-action>
                <v-btn-datatable-action>
                  <v-icon>mdi-trash-can</v-icon>
                  <v-tooltip
                      activator="parent"
                      location="top"
                  >Excluir
                  </v-tooltip>
                </v-btn-datatable-action>
              </td>
            </template>
          </v-data-table-server>
        </v-row>
      </v-card>

      <confirmation-dialog
          :show="show"
          :title="title"
          :message="message"
          :onConfirm="onConfirm"
          :onCancel="onCancel"
      />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>

import {useDisplay} from "vuetify";
import {VDataTableServer} from "vuetify/labs/VDataTable";
import {watch} from "vue";

import router from "@/router";
import {storeToRefs} from "pinia";
import {useUsersListStore} from "@/store/pages/admin/users/list.store";
import {DataTableHeader} from "@/types/Vuetify.type";

const {xs} = useDisplay();

const store = useUsersListStore();

const {
  page,
  totalPages,
  itemsPerPage,
  totalItems,
  data,
  loading,
  search,
} = storeToRefs(store);

const {
  moduleBaseUrl,
  moduleName,
} = store;

const {
  loadItems,
  deleteItem
} = store;

const headers: DataTableHeader[] = [
  {
    title: "ID",
    align: "start",
    sortable: true,
    key: "id"
  },
  {
    title: "Name",
    align: "start",
    sortable: true,
    key: "name"
  },
  {
    title: "Ações",
    align: "end",
    sortable: false,
    key: "actions"
  }
];

watch(() => search.value, () => {
  loadItems({
    page: 1,
    itemsPerPage: itemsPerPage.value,
    sortBy: []
  });
});

</script>
