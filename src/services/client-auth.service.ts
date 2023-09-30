import api from "@/services/admin-axios";
import {CustomResponse} from "@/models/Base/CustomResponse.interface";
import {User} from "@/models/User.model";
import {useAuthStore} from "@/store/pages/admin/auth/auth.store";

export const getGithubAuthUrl = async () => {
    const response = await api.get<{ data: { url: string } }>("/auth/github/url")

    return response.data.data.url
};

export const logout = async () => {
    return new Promise((resolve, reject) => {
        const userStore = useAuthStore();

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
