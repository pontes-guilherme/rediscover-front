<template>
  <v-dialog
      v-model="show"
      width="500"
      persistent
      no-click-animation
  >
    <v-card>
      <v-toolbar
          class="text-center"
          color="primary"
          :title="title"
      ></v-toolbar>
      <v-card-text class="pa-5" v-if="message">
        {{ message }}
      </v-card-text>
      <v-card-actions class="pa-5 justify-end">
        <v-btn rounded="0" variant="plain" color="secondary" @click="onCancel">Cancelar</v-btn>
        <v-btn rounded="0" variant="tonal" color="primary" @click="onConfirm">Confirmar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import {useConfirm} from '@/store/components/confirm.store'
import {storeToRefs} from "pinia";

const store = useConfirm();

const {
  onConfirm,
  onCancel,
} = store;

const {
  show,
  title,
  message,
} = storeToRefs(store);

</script>
