import {defineStore} from "pinia";
import {computed, ref} from "vue";
import * as GithubService from "@/services/github.service";
import * as ProjectService from "@/services/project.service";
import * as TagService from "@/services/tag.service";
import * as TechnologyService from "@/services/technology.service";
import {Tag} from "@/models/Tag.model";
import {Technology} from "@/models/Technology.model";

import {ProjectStatusEnum} from "@/enums/project-status.enum";
import {CreateProjectRequest} from "@/models/Project.model";
import {Author, GithubRepositoryCommit} from "@/models/Github.model";

export const useProjectAddStore = defineStore("project-add", () => {
        const loading = ref(false);
        const projectUrl = ref("");

        const tags = ref<Tag[]>([]);
        const technologies = ref<Technology[]>([]);

        const selectedTags = ref<Tag[]>([]);
        const selectedTechnologies = ref<Technology[]>([]);

        const repository_id = ref<number>(0);
        const project_status = ref<ProjectStatusEnum>(ProjectStatusEnum.ABANDONED);
        const project_abandonment_reason = ref<string>('');
        const project_future = ref<string>('');

        const description = ref<string>('');
        const last_commit = ref<GithubRepositoryCommit>();
        const contributors = ref<Author[]>([]);
        const languages = ref<string[]>([]);
        const stars = ref<number>(0);

        const formErrors = computed(() => {
            const errors = [];

            if (projectUrl.value.length == 0) {
                errors.push('Project URL is required');
            }

            if (selectedTags.value.length == 0) {
                errors.push('At least one tag is required');
            }

            if (selectedTechnologies.value.length == 0) {
                errors.push('At least one technology is required');
            }

            if (project_status.value == undefined) {
                errors.push('Project status is required');
            }

            if (project_abandonment_reason.value.length == 0) {
                errors.push('Project abandonment reason is required');
            }

            if (project_future.value.length == 0) {
                errors.push('Project future is required');
            }

            return errors;
        })

        const formValid = computed(() => {
            return formErrors.value.length == 0;
        })


        const isTagSelected = (tag: Tag): boolean => {
            return selectedTags.value.includes(tag);
        }

        const isTechnologySelected = (technology: Technology): boolean => {
            return selectedTechnologies.value.includes(technology);
        }

        const toggleTag = (tag: Tag) => {
            if (isTagSelected(tag)) {
                selectedTags.value = selectedTags.value.filter(tech => tech != tag)
            } else {
                selectedTags.value.push(tag)
            }
        }

        const toggleTechnology = (technology: Technology) => {
            if (isTechnologySelected(technology)) {
                selectedTechnologies.value = selectedTechnologies.value.filter(tech => tech != technology)
            } else {
                selectedTechnologies.value.push(technology)
            }
        }

        const isUrlValid = async (): Promise<boolean> => {
            loading.value = true;

            const url = projectUrl.value;

            return new Promise((resolve) => {
                GithubService.isGitHubRepoUrlValid(url)
                    .then((valid: boolean) => {
                        resolve(valid)
                    })
                    .catch(() => {
                        resolve(false)
                    })
                    .finally(() => loading.value = false);
            });
        }

        const create = async () => {
            loading.value = true;

            const data: CreateProjectRequest = {
                repository_id: repository_id.value,
                description: description.value,
                repository_url: projectUrl.value,
                abandonment_reason: project_abandonment_reason.value,
                project_future: project_future.value,
                project_abandonment_status: project_status.value ?? ProjectStatusEnum.ABANDONED,
                tags: selectedTags.value,
                technologies: selectedTechnologies.value,
            }

            return new Promise((resolve, reject) => {
                ProjectService.create(data)
                    .then((data) => {
                        resolve(data)
                    })
                    .catch((error) => {
                        reject(error)
                    })
                    .finally(() => loading.value = false);
            });
        }

        const loadProjectDetails = async () => {
            loading.value = true;

            const url = projectUrl.value;

            return new Promise((resolve, reject) => {
                GithubService.getRepositoryData(url)
                    .then((data) => {
                        const repository = data.data.data;

                        repository_id.value = repository.id;
                        last_commit.value = repository.commits.filter(
                            (commit) => commit.author.type === 'User'
                        )?.[0] || null;
                        // 3 contributors max
                        contributors.value = repository.contributors.filter(
                            (contributor) => contributor.type === 'User'
                        )
                            .slice(0, 3)
                        languages.value = Object.keys(repository.languages);
                        stars.value = repository.stargazers_count;
                        description.value = repository.description;

                        resolve(data)
                    })
                    .catch((error) => {
                        console.log(error)
                        reject(error)
                    })
                    .finally(() => loading.value = false);
            })
        }


        const fetchTags = async () => {
            TagService.fetch().then((data) => {
                tags.value = data.data.data;
            });
        }

        const fetchTechnologies = async () => {
            TechnologyService.fetch().then((data) => {
                technologies.value = data.data.data;
            });
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
            projectUrl,
            tags,
            technologies,
            selectedTags,
            selectedTechnologies,
            project_status,
            project_abandonment_reason,
            project_future,

            last_commit,
            contributors,
            languages,
            stars,
            description,

            formErrors,
            formValid,

            isUrlValid,
            isTagSelected,
            isTechnologySelected,
            toggleTag,
            toggleTechnology,
            fetchTags,
            fetchTechnologies,
            create,
            loadProjectDetails,
            $resetFillableFields,
        };
    }
)

