<template>
  <v-card class="card mx-auto w-100" variant="flat">
    <div class="card__image">
      <div class="tags d-flex align-end h-100 ml-10">
        <div class="chip">PHP</div>
        <div class="chip">Back-end</div>
      </div>
    </div>

    <div class="content-wrapper px-10">
      <div class="card__title mt-5 text-h6 font-weight-black">
        Project Name - Application
      </div>

      <div class="card__content mt-5 mb-5 text-grey-darken-1">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
        sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
        imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
        at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam
        condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem
        orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor
        elit. Proin tempus,.
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.card {
  &__image {
    background-color: rgb(var(--v-theme-grey));

    height: 260px;
    border-radius: inherit;

    .tags {
      top: 20px;
      left: 20px;
    }
  }
}

.chip {
  background-color: white;
  padding: 5px 10px;
  border-radius: 15px;
  color: black;
  font-size: 1rem;
  font-weight: bold;

  margin-bottom: 15px;

  &:not(:first-child) {
    margin-left: 10px;
  }
}

.card__content {
  line-height: 2rem;
}
</style>
