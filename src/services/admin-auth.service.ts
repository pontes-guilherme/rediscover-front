import api from "@/services/admin-axios";
import {CustomResponse} from "@/models/Base/CustomResponse.interface";
import {User} from "@/models/User.model";
import {useAuthStore} from "@/store/pages/admin/auth/auth.store";
import {AxiosResponse, AxiosError} from "axios";

export const login = async (email: string, password: string) => {
    const userStore = useAuthStore();

    return new Promise((resolve, reject) => {
        return api.post<CustomResponse<User>>("/admin/auth/login", {
            email,
            password
        })
            .then((response: AxiosResponse) => {
                userStore.setAuthenticatedUser(response.data.data);

                resolve(true);
            })
            .catch((error: AxiosError) => {
                console.log(error);
                reject();
            });
    })
};

export const logout = async () => {
    return new Promise((resolve, reject) => {
        const userStore = useAuthStore();

        api.post("/admin/auth/logout")
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
