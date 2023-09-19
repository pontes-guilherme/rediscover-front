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
    {
      title: "Users",
      value: "users",
      icon: "mdi-account",
      route: "/admin/users"
    },
    {
      title: "Projects",
      value: "projects",
      icon: "mdi-folder",
      route: "/admin/users"
    },
    {
      title: "Comments",
      value: "comments",
      icon: "mdi-comment-account",
      route: "/admin/users"
    },
    {
      title: "Technologies",
      value: "technologies",
      icon: "mdi-code-braces",
      route: "/admin/users"
    },
    {
      title: "Tags",
      value: "tags",
      icon: "mdi-tag",
      route: "/admin/users"
    },
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
