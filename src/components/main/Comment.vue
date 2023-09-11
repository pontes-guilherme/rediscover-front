<template>
  <div class="comment py-5 px-5">
    <div class="header d-flex align-center justify-space-between">
      <div class="profile d-flex align-center">
        <div class="profile__picture">
          <v-avatar
            color="grey-darken-1"
            size="40"
          ></v-avatar>
        </div>
        <div class="profile__username font-weight-medium ml-2">User123</div>
      </div>
      <div class="actions">
        <v-btn
          icon
          color="secondary"
          size="30"
          variant="text"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="content text-grey-darken-2 mt-5">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: string
}>()
</script>

<style scoped lang="scss">
.comment {
  transition: background-color 0.2s ease-in-out;

  &:not(:last-child) {
    border-bottom: 1px solid #eaeaea;
  }

  &:hover {
    background-color: #fafafa;
  }
}

.content {
  line-height: 1.8rem;
}
</style>
