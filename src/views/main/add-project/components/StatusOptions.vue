<template>
  <div class="status-options mt-2 d-flex">
    <div
        :class="`chip chip--abandoned font-weight-black py-2 px-8 rounded-pill ${selectedStatus === 'abandoned' ? 'selected' : ''}`"
        @click="changeStatus('abandoned')"
    >
      Abandoned
    </div>

    <div
        :class="`chip chip--inactive font-weight-black py-2 px-8 rounded-pill ml-3 ${selectedStatus === 'inactive' ? 'selected' : ''}`"
        @click="changeStatus('inactive')"
    >
      Inactive
    </div>

    <div
        :class="`chip chip--deprecated font-weight-black py-2 px-8 rounded-pill ml-3 ${selectedStatus === 'deprecated' ? 'selected' : ''}`"
        @click="changeStatus('deprecated')"
    >
      Deprecated
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const selectedStatus = ref('');

const changeStatus = (status: string) => {
  selectedStatus.value = status;
}
</script>

<style scoped lang="scss">
@import '@/assets/css/chip';

.status-options {
  flex-wrap: wrap;

  .chip {
    &--abandoned {
      background-color: rgba(255, 0, 0, 0.4);
    }

    &--inactive {
      background-color: rgba(255, 153, 0, 0.4);
    }

    &--deprecated {
      background-color: rgba(66, 0, 255, 0.4);
    }
  }
}
</style>
