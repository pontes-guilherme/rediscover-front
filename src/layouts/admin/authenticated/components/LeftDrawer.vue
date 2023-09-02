<template>
  <v-navigation-drawer
    :model-value="expanded"
    @update:modelValue="onExpandedChange"
  >
    <v-list
      density="compact"
      nav
      class="text-primary"
    >
      <template
        v-for="menuItem in menu"
        :key="menuItem.value"
      >
        <router-link :to="menuItem.route">
          <v-list-item
            :prepend-icon="menuItem.icon"
            :title="menuItem.title"
            :value="menuItem.value"
          />
        </router-link>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useAppDrawer } from "@/store/components/drawer.store";
import { computed, onMounted } from "vue";
import { useDisplay } from "vuetify";
import { storeToRefs } from "pinia";

const { lg, xl, xxl } = useDisplay();
const store = useAppDrawer();

const { menu } = storeToRefs(store);

const expanded = computed(() => store.expanded);

const onExpandedChange = (e: boolean) => {
  store.changeExpandedTo(e);
};

// if screen is small, the drawer should start as closed
onMounted(() => {
  if (!(lg.value || xl.value || xxl.value)) {
    store.changeExpandedTo(false);
  }
});

</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>
