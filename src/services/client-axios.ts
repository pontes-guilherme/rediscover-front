import axios, {AxiosResponse} from "axios";
import {useClientAuthStore} from "@/store/pages/main/auth/auth.store";
import router from "@/router";
import {CLIENT_AUTH_KEY, CLIENT_TOKEN_KEY} from "@/constants/localstorage.constants";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.headers.common['Accept'] = 'application/json';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

if (localStorage.getItem(CLIENT_AUTH_KEY) === 'true') {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(CLIENT_TOKEN_KEY)}`;
}

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.config.url?.includes('login') && response.status === 200) {
            router.replace({name: 'main.home'});
        } else if (response.config.url?.includes('logout') && response.status === 200) {
            router.replace({name: 'main.home'});
        }

        return response;
    }, (error) => {
        if (error.response.status === 401 || error.response.status === 419) {
            const userStore = useClientAuthStore();

            userStore.logout();

            router.replace({name: 'main.home'});
        }

        return Promise.reject(error);
    });

export default axiosInstance
