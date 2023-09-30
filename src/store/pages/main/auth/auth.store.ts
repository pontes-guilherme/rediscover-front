import {defineStore} from "pinia";
import {ref} from "vue";
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

  }

  function setAuthenticatedUser(data: LoginResponse) {
    setIsAuthenticated(true);
    setUser(data.user);
    setToken(data.token);
  }

  async function getAuthUrl() {
    return AuthService
      .getGithubAuthUrl()
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
    setIsAuthenticated,
    setAuthenticatedUser,
    setUser,
  }
})
