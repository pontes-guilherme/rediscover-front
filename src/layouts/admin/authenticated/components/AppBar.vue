<template>
  <v-app-bar elevation="5">
    <v-app-bar-nav-icon
      icon="mdi-menu"
      @click="toggleDrawer"
    />

    <v-toolbar-title>{{ projectInfosStore.name }}</v-toolbar-title>


    <v-menu
      :location="'bottom'"
      transition="slide-y-transition"
    >
      <template #activator="{ props }">
        <v-list
          v-bind="props"
          class="hoverable"
        >
          <v-list-item
              prepend-avatar="@/assets/images/user/default-user-picture.png"
              :title="user?.name"
              :subtitle="user?.email || ''"
              v-if="user"
          />
        </v-list>
      </template>

      <v-list>
        <v-list-item
          active-color="primary"
          @click="logout"
        >
          <template #prepend>
            <v-icon icon="mdi-logout"/>
          </template>

          <v-list-item-title>Sair</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts" setup>

import {useAppDrawer} from "@/store/components/drawer.store";
import {useProjectInfosStore} from "@/store/ProjectInfos.store";
import {useAuthStore} from "@/store/pages/admin/auth/auth.store";
import {computed} from "vue";
import router from "@/router";

const drawerStore = useAppDrawer();
const authStore = useAuthStore();
const projectInfosStore = useProjectInfosStore();

const user = computed(() => authStore.user);

const toggleDrawer = () => {
  drawerStore.toggle();
}

const logout = async () => {
  await authStore.logout();
  router.go(0);
}

</script>

<style lang="scss" scoped>
.hoverable {
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
}
</style>
