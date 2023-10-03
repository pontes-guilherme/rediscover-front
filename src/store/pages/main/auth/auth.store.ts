import {defineStore} from "pinia";
import {ref} from "vue";
import api from "@/services/client-axios";
import * as AuthService from '@/services/client-auth.service';
import {CLIENT_AUTH_KEY, CLIENT_TOKEN_KEY, CLIENT_USER_KEY} from "@/constants/localstorage.constants";
import {User} from "@/models/User.model";

interface LoginResponse {
    user: User;
    token: string;
}

export const useClientAuthStore = defineStore("client-auth", () => {
    const isAuthenticated = ref(localStorage.getItem(CLIENT_AUTH_KEY) === 'true' || false);
    const user = ref<User>(
        JSON.parse(localStorage.getItem(CLIENT_USER_KEY) || '{}')
        || null
    );
    const token = ref(localStorage.getItem(CLIENT_TOKEN_KEY) || null);

    const email = ref('');
    const password = ref('');
    const formValid = ref(false);

    function setIsAuthenticated(authenticated: boolean) {
        isAuthenticated.value = authenticated;
        localStorage.setItem(CLIENT_AUTH_KEY, authenticated.toString());
    }

    function setUser(userObject: any) {
        user.value = userObject;
        localStorage.setItem(CLIENT_USER_KEY, JSON.stringify(userObject));
    }

    function setToken(tokenString: any) {
        token.value = tokenString;
        localStorage.setItem(CLIENT_TOKEN_KEY, tokenString);
        api.defaults.headers.common['Authorization'] = `Bearer ${tokenString}`;
    }

    function setAuthenticatedUser(data: LoginResponse) {
        setIsAuthenticated(true);

        if (data.user) {
            setUser(data.user);
        }

        if (data.token) {
            setToken(data.token);
        }
    }

    async function getAuthUrl() {
        return AuthService
            .getGithubAuthUrl()
    }

    async function fetchProfile() {
        return AuthService
            .fetchProfile()
            .then((response) => {
                const data = {
                    user: response.data.data,
                } as LoginResponse
                setAuthenticatedUser(data);
            });
    }

    async function logout() {
        return new Promise((resolve) => {
            setIsAuthenticated(false);
            setUser(null);
            setToken(null);

            resolve(true);
        });
    }

    return {
        isAuthenticated,
        user,
        token,
        email,
        password,
        formValid,

        getAuthUrl,
        logout,
        fetchProfile,
        setIsAuthenticated,
        setAuthenticatedUser,
        setUser,
        setToken,
    }
})
