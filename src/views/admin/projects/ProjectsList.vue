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
                  <v-icon>mdi-eye</v-icon>
                  <v-tooltip
                    activator="parent"
                    location="top"
                  >Visualizar
                  </v-tooltip>
                </v-btn-datatable-action>
                <v-btn-datatable-action
                  @click="onDelete(item.raw.id)"
                >
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
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>

import {useDisplay} from "vuetify";
import {VDataTableServer} from "vuetify/labs/VDataTable";
import {watch} from "vue";

import router from "@/router";
import {storeToRefs} from "pinia";
import {DataTableHeader} from "@/types/Vuetify.type";
import {useProjectsListStore} from "@/store/pages/admin/projects/list.store";
import {useConfirm} from "@/store/components/confirm.store";

const {xs} = useDisplay();
const {
  show,
  title,
  message,
  onConfirm,
  onCancel,
  open,
} = useConfirm();

const store = useProjectsListStore();

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
    title: "Repository ID",
    align: "start",
    sortable: true,
    key: "repository_id"
  },
  {
    title: "Repository Name",
    align: "start",
    sortable: true,
    key: "repository_name"
  },
  {
    title: "Repository Owner",
    align: "start",
    sortable: true,
    key: "repository_owner"
  },
  {
    title: "Ações",
    align: "end",
    sortable: false,
    key: "actions"
  }
];

async function onDelete(id: number) {
  const deletePromise = open("Delete?", 'Are you sure you want to delete this item?');

  deletePromise.then(async ({confirm}) => {
    if (!confirm) {
      return;
    }

    await deleteItem(id);
  });
}

watch(() => search.value, () => {
  loadItems({
    page: 1,
    itemsPerPage: itemsPerPage.value,
    sortBy: []
  });
});

</script>
