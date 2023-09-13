<template>
  <div class="modal__content">
    <section>
      <div class="author mt-2">
        <v-select
            label="Report Reason"
            color="primary"
            :items="['Spam', 'Inappropriate', 'Abusive', 'Other']"
        />
      </div>
    </section>

    <section class="mt-10">
      <h3>Description</h3>

      <div class="author mt-2">
        <v-textarea
            variant="filled"
            rows="5"
            auto-grow
        />
      </div>
    </section>

    <section class="my-10 d-flex justify-center">
      <v-btn
          class="px-16 mb-10"
          color="primary"
          @click="$emit('close')"
      >Report
      </v-btn>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import '@/assets/css/chip';

.modal__content {
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
}
</style>
