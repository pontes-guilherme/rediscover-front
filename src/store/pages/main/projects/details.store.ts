import {defineStore} from "pinia";
import {ref} from "vue";
import * as ProjectService from "@/services/project.service";
import {Tag} from "@/models/Tag.model";
import {Technology} from "@/models/Technology.model";

import {ProjectStatusEnum} from "@/enums/project-status.enum";
import {Project} from "@/models/Project.model";

export const useProjectDetailsStore = defineStore("project-details", () => {
        const loading = ref(false);

        const allProjects = ref<Project[]>([]);

        const id = ref(0);
        const repository_id = ref<number>(0);
        const repository_url = ref<string>('');
        const repository_owner = ref<string>('');
        const repository_name = ref<string>('');
        const project_status = ref<ProjectStatusEnum>(ProjectStatusEnum.ABANDONED);
        const project_abandonment_reason = ref<string>('');
        const project_future = ref<string>('');

        const selectedTags = ref<Tag[]>([]);
        const selectedTechnologies = ref<Technology[]>([]);

        const description = ref<string>('');

        const loadProjectDetails = async () => {
            loading.value = true;

            return new Promise((resolve, reject) => {
                ProjectService.get(id.value)
                    .then((data) => {
                        const repository = data.data.data;

                        repository_id.value = repository.id;
                        repository_url.value = repository.repository_url;
                        repository_owner.value = repository.repository_owner;
                        repository_name.value = repository.repository_name;
                        description.value = repository.description;
                        project_abandonment_reason.value = repository.abandonment_reason;
                        project_future.value = repository.project_future;
                        selectedTags.value = repository.tags;
                        selectedTechnologies.value = repository.technologies;

                        resolve(data)
                    })
                    .catch((error) => {
                        console.log(error)
                        reject(error)
                    })
                    .finally(() => loading.value = false);
            })
        }

        const loadAllProjects = async () => {
            loading.value = true;

            return new Promise((resolve, reject) => {
                ProjectService.fetch()
                    .then((data) => {
                        allProjects.value = data.data.data;

                        resolve(data)
                    })
                    .catch((error) => {
                        console.log(error)
                        reject(error)
                    })
                    .finally(() => loading.value = false);
            })
        }

        const $resetFillableFields = () => {
            selectedTags.value = [];
            selectedTechnologies.value = [];
            project_status.value = ProjectStatusEnum.ABANDONED;
            project_abandonment_reason.value = '';
            project_future.value = '';
            description.value = '';
        }

        return {
            loading,

            allProjects,
            repository_id,
            repository_url,
            repository_owner,
            repository_name,
            selectedTags,
            selectedTechnologies,
            project_status,
            project_abandonment_reason,
            project_future,
            description,

            loadAllProjects,
            loadProjectDetails,
            $resetFillableFields,
        };
    }
)

