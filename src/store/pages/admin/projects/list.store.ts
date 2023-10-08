import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import {useDebounce} from "@/composables/debounce.composable";
import * as ProjectAdminService from "@/services/project-admin.service";

export const useProjectsListStore = defineStore("projects-list", () => {
  const moduleBaseUrl = "projects";
  const moduleName = "Projects";

  const page = ref(1);
  const totalPages = ref(0);
  const itemsPerPage = ref(10);
  const totalItems = ref(0);
  const data: Ref = ref([]);
  const loading = ref(false);

  const search = useDebounce("", 500);

  const loadItems = async (
    {page, itemsPerPage, sortBy}:
      { page: number, itemsPerPage: number, sortBy: { key: string, order: "asc" | "desc" }[] }
  ) => {
    loading.value = true;

    const params: any = {
      filters: {
        search: search.value
      },
      page: {
        page,
        per_page: itemsPerPage
      },
    };

    if (sortBy && sortBy[0]) {
      params["sort"] = {
        sortBy: sortBy[0].key,
        sortOrder: sortBy[0].order
      };
    }

    const dataFetch = await ProjectAdminService.fetch(params);

    data.value = dataFetch.data.data;
    totalItems.value = dataFetch.data.meta.total || 0;
    totalPages.value = dataFetch.data.meta.last_page || 0;

    loading.value = false;
  };

  const deleteItem = async (id: number) => {
    await ProjectAdminService.destroy(id);

    await loadItems({
      page: 1,
      itemsPerPage: itemsPerPage.value,
      sortBy: []
    });
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
    deleteItem,
  };
});
