<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.content {
  padding: 0 50px;

  @media (max-width: 1100px) {
    padding: 0;
  }
}
</style>
