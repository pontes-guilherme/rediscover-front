import api from "@/services/client-axios";
import {useClientAuthStore} from "@/store/pages/main/auth/auth.store";

export const getGithubAuthUrl = async () => {
    const response = await api.get<{ data: { url: string } }>("/auth/github/url")

    return response.data.data.url
};

export const fetchProfile = async () => {
    return api.get("/profile");
}

export const logout = async () => {
    return new Promise((resolve, reject) => {
        const userStore = useClientAuthStore();

        api.post("/auth/logout")
            .then(() => {
                return userStore.logout();
            })
            .then(() => {
                resolve(true);
            })
            .catch(() => {
                reject();
            });
    });
};
