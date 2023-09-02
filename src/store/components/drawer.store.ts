// Utilities
import {defineStore} from "pinia";
import {ref} from "vue";

interface MenuItem {
  title: string;
  value: string;
  icon: string;
  route: string;
}

export const useAppDrawer = defineStore("drawer", () => {
  const expanded = ref(true);
  const menu = ref<MenuItem[]>([
    // {
    //   title: "Home",
    //   value: "home",
    //   icon: "mdi-view-dashboard",
    //   route: "/"
    // },
  ]);

  function toggle() {
    expanded.value = !expanded.value;
  }

  function changeExpandedTo(value: boolean) {
    expanded.value = value;
  }

  return {
    expanded,
    menu,

    toggle,
    changeExpandedTo
  };
});
