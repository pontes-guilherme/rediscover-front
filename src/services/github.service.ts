import api from "@/services/client-axios";
import {JsonResponse} from "@/models/Base/JsonResponse.interface";
import {GithubRepositoryDetails} from "@/models/Github.model";

export async function isGitHubRepoUrlValid(url: string) {
    const urlRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+(\/)?$/;

    if (!urlRegex.test(url)) {
        return false;
    }

    const {owner, repo} = getOwnerAndRepoFromUrl(url);

    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

        if (response.status === 404) {
            return false;
        } else if (!response.ok) {
            console.error('Error:', response.statusText);
            return false;
        }

        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
}

export function getOwnerAndRepoFromUrl(url: string): { owner: string, repo: string } {
    const [, , , owner, repo] = url.split('/');
    return {owner, repo};
}

export async function getRepositoryData(url: string) {
    return api.get<JsonResponse<GithubRepositoryDetails>>(`/github/repository?url=${url}`)
}
