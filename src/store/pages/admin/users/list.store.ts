import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import {useDebounce} from "@/composables/debounce.composable";

export const useUsersListStore = defineStore("users-list", () => {
  const moduleBaseUrl = "users";
  const moduleName = "Users";

  const page = ref(1);
  const totalPages = ref(0);
  const itemsPerPage = ref(10);
  const totalItems = ref(0);
  const data: Ref = ref([]);
  const loading = ref(false);

  const search = useDebounce("", 500);

  const loadItems = async () => {
    loading.value = true;

    //

    loading.value = false;
  };

  return {
    page,
    totalPages,
    itemsPerPage,
    totalItems,
    data,
    loading,
    search,

    moduleBaseUrl,
    moduleName,

    loadItems,
  };
});
