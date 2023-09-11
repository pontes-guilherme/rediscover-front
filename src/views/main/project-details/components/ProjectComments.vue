<template>
  <v-card class="card mx-auto w-100 pa-3 py-sm-5 px-sm-5" variant="flat">
    <div class="card__content">
      <Comment :content="comment" v-for="(comment, i) in comments" :key="i"/>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import Comment from "@/components/main/Comment.vue";
import {ref} from "vue";

const comments = ref<string[]>([
  'Lorem ipsum dolor sit amet consectetur adipiscing eli0t Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet',
  'Lorem ipsum dolor sit amet consectetur adipiscing eli0t Ut et massa mi. Aliquam in hendrerit urna. ',
  'Lorem ipsum dolor sit amet consectetur adipiscing eli0t Ut et massa mi. Aliquam in hendrerit urna. ',
])
</script>

<style scoped lang="scss">
.card {
  &__content {
    max-height: 500px;
    margin: 0 auto;
    overflow-y: auto;
  }
}
</style>
