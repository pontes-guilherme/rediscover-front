<template>
  <LiteBanner title="About Us"></LiteBanner>

  <div class="content">
    <div class="about text-justify text-tertiary">
      <p class="text-h5 font-weight-regular mb-16">
        We believe that every
        line of code has a story to tell, and we are here to ensure that those stories never fade away.

        In the vast landscape of open-source projects, many gems have been left abandoned, waiting for passionate
        developers
        like you to breathe new life into them. Our mission is to bridge the gap between these projects and the talented
        individuals who can help them thrive once again.
      </p>

      <h2 class="mt-16 text-center">Our Vision</h2>
      <p class="text-h5 font-weight-regular mt-10">
        Our platform is designed to foster collaboration, and promote the continued growth of open-source software. We
        believe
        in the power of community and the incredible potential of collective knowledge.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

import LiteBanner from "@/views/main/home/components/LiteBanner.vue";
</script>

<style lang="scss" scoped>
.content {
  padding: 100px 25%;
}

p {
  line-height: 2em;
}

@media (max-width: 1200px) {
  .content {
    padding: 100px 10%;
  }
}

@media (max-width: 768px) {
  .content {
    padding: 50px 8%;
  }

  p {
    font-size: 1.2rem !important;
    line-height: 1.8em;
  }
}
</style>
