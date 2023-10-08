import {defineStore} from "pinia";
import {ref} from "vue";
import * as AuthService from '@/services/admin-auth.service';
import {ADMIN_AUTH_KEY, ADMIN_TOKEN_KEY, ADMIN_USER_KEY} from "@/constants/localstorage.constants";
import {User} from "@/models/User.model";

interface LoginResponse {
  user: User;
  token: string;
}

export const useAuthStore = defineStore("admin-auth", () => {
  const isAuthenticated = ref(localStorage.getItem(ADMIN_AUTH_KEY) === 'true' || false);
  const user = ref<User>(
    JSON.parse(localStorage.getItem(ADMIN_USER_KEY) || '{}')
    || null
  );
  const token = ref(localStorage.getItem(ADMIN_TOKEN_KEY) || null);

  const email = ref('');
  const password = ref('');
  const formValid = ref(false);

  function setIsAuthenticated(authenticated: boolean) {
    isAuthenticated.value = authenticated;
    localStorage.setItem(ADMIN_AUTH_KEY, authenticated.toString());
  }

  function setUser(userObject: any) {
    user.value = userObject;
    localStorage.setItem(ADMIN_USER_KEY, JSON.stringify(userObject));
  }

  function setToken(tokenString: any) {
    token.value = tokenString;
    localStorage.setItem(ADMIN_TOKEN_KEY, tokenString);

  }

  function setAuthenticatedUser(data: LoginResponse) {
    setIsAuthenticated(true);
    setUser(data.user);
    setToken(data.token);
  }

  function login() {
    AuthService
      .login(email.value, password.value)
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

    login,
    logout,
    setIsAuthenticated,
    setAuthenticatedUser,
    setUser,
  }
})
