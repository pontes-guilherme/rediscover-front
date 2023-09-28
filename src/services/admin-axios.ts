import axios, {AxiosResponse, AxiosError} from "axios";
import {useAuthStore} from "@/store/pages/admin/auth/auth.store";
import router from "@/router";
import {ADMIN_AUTH_KEY, ADMIN_TOKEN_KEY} from "@/constants/localstorage.constants";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.headers.common['Accept'] = 'application/json';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

if (localStorage.getItem(ADMIN_AUTH_KEY) === 'true') {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(ADMIN_TOKEN_KEY)}`;
}

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.config.url?.includes('login') && response.status === 200) {
      router.replace({name: 'admin.users'});
    } else if (response.config.url?.includes('logout') && response.status === 200) {
      router.replace({name: 'Login'});
    }

    return response;
  }, (error) => {
    if (error.response.status === 401 || error.response.status === 419) {
      const userStore = useAuthStore();

      userStore.logout();

      router.replace({name: 'Login'});
    }

    return Promise.reject(error);
  });

export default axiosInstance
