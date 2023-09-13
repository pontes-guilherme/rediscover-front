<template>
  <v-dialog
      class="modal report-modal"
      v-model="active"
      :fullscreen="smAndDown"
      :scrim="false"
  >
    <v-toolbar
        dark
        color="primary"
    >
      <v-spacer></v-spacer>

      <v-btn
          icon
          dark
          @click="active = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card>
      <slot @close="active = false"></slot>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import {useDisplay} from "vuetify";
import {useVModel} from "@/composables/vmodel.composable";

defineEmits([
  'update:active',
])

const props = defineProps({
  active: {
    type: Boolean,
    required: true,
  },
})

const active = useVModel(props, 'active')

const {smAndDown} = useDisplay()
</script>

<style scoped lang="scss">

.modal {
  max-width: 60%;

  @media (max-width: 1200px) {
    max-width: 85%;
  }

  @media (max-width: 960px) {
    max-width: 100%;
  }
}
</style>
