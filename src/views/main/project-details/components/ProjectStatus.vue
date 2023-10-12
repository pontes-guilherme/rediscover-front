<template>
  <div
      :class="`chip chip--${project_abandonment_status || 'abandoned'} font-weight-black py-2 px-8 mb-8 rounded-pill selected`">
    {{ statusLabel }}
  </div>

  <v-card class="card mx-auto w-100 py-10 px-10" variant="flat">
    <div class="content">
      <div class="card__title mb-5">
        <h5 class="text-body-1 font-weight-black">Why?</h5>
      </div>

      <div class="card__content text-grey-darken-1">
        {{
          abandonment_reason || `After careful consideration, I have decided to abandon this project for the following reasons. First, the
        project
        does not align with my personal or professional goals anymore. I have realized that I am more interested in
        pursuing other opportunities that are more relevant to my skills and passions. Second, the project has
        encountered
        several challenges and setbacks that have made it difficult to complete within the expected timeframe and
        budget.
        I have tried to overcome these obstacles, but they have proven to be too complex and costly.`
        }}
      </div>

      <div class="card__title my-5">
        <h5 class="text-body-1 font-weight-black">What I wish for this project future?</h5>
      </div>

      <div class="card__content text-grey-darken-1">
        {{
          project_future || `I hope that it will continue to grow and evolve with the help of other developers who share the same vision and
        passion for it. The project is open source, and anyone can fork it, modify it, or submit pull requests to
        improve
        it. I will still be available for occasional consultation or guidance, but I will not be actively involved in
        the
        coding or reviewing process.`
        }}
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  abandonment_reason: {
    type: String,
    required: false
  },
  project_future: {
    type: String,
    required: false
  },
  project_abandonment_status: {
    type: String,
    required: false
  }
})

const statusLabel = computed(() => {
  return {
    'abandoned': 'Abandoned',
    'deprecated': 'Deprecated',
    'inactive': 'Inactive',
    'default': 'Abandoned'
  }[props?.project_abandonment_status || 'default']
})


</script>

<style scoped lang="scss">
@import "@/assets/css/chip";

.rating {
  :deep(i) {
    font-size: 5rem;
  }
}

.content {
  max-height: 460px;
  overflow-y: auto;
}

.card__content {
  line-height: 2rem;
}

.chip {
  display: inline-block;
  text-align: center;

  &--abandoned {
    background-color: rgba(255, 0, 0, 0.4)
  }

  &--deprecated {
    background-color: rgba(66, 0, 255, 0.4);
  }

  &--inactive {
    background-color: rgba(255, 153, 0, 0.4);
  }
}

.card {
  height: 535px;
}
</style>
