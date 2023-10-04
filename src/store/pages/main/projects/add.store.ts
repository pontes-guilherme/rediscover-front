import {defineStore} from "pinia";
import * as GithubService from "@/services/github.service";
import {ref} from "vue";

export const useProjectAddStore = defineStore("project-add", () => {
    const loading = ref(false);
    const projectUrl = ref("");

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

    return {
        loading,
        projectUrl,

        isUrlValid,
    };
});
