<template>
  <v-card class="card mx-auto w-100 pa-3 py-sm-5 px-sm-10" variant="flat">
    <div class="card__title text-center mt-5">
      <h5 class="text-h6 font-weight-black">Give your feedback by rating this project</h5>
    </div>

    <div class="card__content mt-5">
      <div class="label d-flex flex-column align-center">
        <table>
          <tbody>
          <tr>
            <td class="text-right">
              <v-icon icon="mdi-star" color="#E1C109"></v-icon>
            </td>
            <td>
              <span class="text-grey-darken-2 ml-2">I do not see any future</span>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <v-icon icon="mdi-star" color="#E1C109"></v-icon>
              <v-icon icon="mdi-star" color="#E1C109"></v-icon>
            </td>
            <td>
              <span class="text-grey-darken-2 ml-2">It is ok. Could be improved</span>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <v-icon icon="mdi-star" color="#E1C109"></v-icon>
              <v-icon icon="mdi-star" color="#E1C109"></v-icon>
              <v-icon icon="mdi-star" color="#E1C109"></v-icon>
            </td>
            <td>
              <span class="text-grey-darken-2 ml-2">It is good. Needs to continue</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="rating d-flex justify-center my-10">
        <v-rating
          :size="80"
          v-model="rating"
          color="#E1C109"
          length="3"
          half-increments
          hover
        ></v-rating>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import {ref} from "vue";

const rating = ref(0);
</script>

<style scoped lang="scss">
.rating {
  :deep(i) {
    font-size: 5rem;
  }
}
</style>
