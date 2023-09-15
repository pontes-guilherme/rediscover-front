<template>
  <router-view/>
  <confirm-dialog/>
</template>

<script lang="ts" setup>

import {onBeforeMount} from "vue";
import {useProjectInfosStore} from "@/store/ProjectInfos.store";
import ConfirmDialog from "@/components/ConfirmDialog.vue";

const projectInfosStore = useProjectInfosStore();

onBeforeMount(() => {
  document.getElementsByTagName("title")[0].textContent = projectInfosStore.name;
});

</script>
