<template>
  <router-view/>
</template>

<script lang="ts" setup>

import {onBeforeMount} from "vue";
import {useProjectInfosStore} from "@/store/ProjectInfos.store";

const projectInfosStore = useProjectInfosStore();

onBeforeMount(() => {
  document.getElementsByTagName("title")[0].textContent = projectInfosStore.name;
});

</script>
