import {defineStore} from "pinia";
import {ref} from "vue";

export const useProjectInfosStore = defineStore('project-infos', () => {
  const name = ref(import.meta.env.VITE_PROJECT_NAME);

  return {
    name,
  }
});
