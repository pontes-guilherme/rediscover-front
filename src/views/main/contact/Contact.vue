<template>
  <LiteBanner title="Contact Us"></LiteBanner>

  <div class="content">
    <div class="contact text-justify text-tertiary">
      <p class="text-h5 font-weight-regular">
        We're thrilled that you want to get in touch with us! If you have any questions, feedback, or inquiries, please
        don't hesitate to reach out via GitHub.
      </p>

      <p class="text-h5 font-weight-regular mt-16">
        Feel free to create an issue on our GitHub repository with your inquiry or comment. We actively monitor our
        repository and will respond to your request as soon as possible. When creating an issue, please provide as much
        detail as possible to help us better understand and address your concerns.
      </p>

      <p class="mt-16 d-flex justify-center">
        <a
          :href="repoUrl"
          target="_blank"
          class="text-decoration-none text-black"
        >
          <v-icon icon="mdi-github" size="72"></v-icon>
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

import LiteBanner from "@/views/main/home/components/LiteBanner.vue";
import {useProjectInfosStore} from "@/store/ProjectInfos.store";

const infoStore = useProjectInfosStore();

const {repoUrl} = infoStore;
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

a {
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
