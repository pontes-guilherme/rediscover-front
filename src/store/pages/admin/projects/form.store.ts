import {defineStore} from "pinia";
import {ref} from "vue";
import * as ProjectAdminService from "@/services/project-admin.service";
import {ProjectStatusEnum} from "@/enums/project-status.enum";
import {Technology} from "@/models/Technology.model";
import {Tag} from "@/models/Tag.model";

export const useProjectFormStore = defineStore("project-form", () => {
  const moduleBaseUrl = "/projects";
  const moduleName = "Projects";

  const loading = ref(false);

  const id = ref<number | null>(null);
  const repository_id = ref<number>(0);
  const repository_url = ref<string>('');
  const repository_name = ref<string>('');
  const repository_owner = ref<string>('');

  const project_status = ref<ProjectStatusEnum>(ProjectStatusEnum.ABANDONED);
  const abandonment_reason = ref<string>('');
  const project_abandonment_status = ref<string>('');
  const project_future = ref<string>('');

  const tags = ref<Tag[]>([]);
  const technologies = ref<Technology[]>([]);

  async function loadData(idParam: number) {
    loading.value = true;

    ProjectAdminService.get(idParam)
      .then(({data}) => {
        id.value = data.data.id;
        repository_id.value = data.data.repository_id;
        repository_url.value = data.data.repository_url;
        repository_name.value = data.data.repository_name;
        repository_owner.value = data.data.repository_owner;
        abandonment_reason.value = data.data.abandonment_reason;
        project_abandonment_status.value = data.data.project_abandonment_status;
        project_future.value = data.data.project_future;

        tags.value = data.data.tags;
        technologies.value = data.data.technologies;
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        loading.value = false;
      });
  }

  function $reset() {
    loading.value = false;
    id.value = null;

  }

  return {
    loading,
    id,
    repository_id,
    repository_url,
    repository_name,
    repository_owner,
    project_status,
    abandonment_reason,
    project_abandonment_status,
    project_future,
    tags,
    technologies,

    moduleName,

    loadData,
    $reset
  };
});
