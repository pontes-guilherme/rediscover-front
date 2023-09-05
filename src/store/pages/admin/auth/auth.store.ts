import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  const user = ref(localStorage.getItem("user") || null);

  function setIsAuthenticated(authenticated: boolean) {
    isAuthenticated.value = authenticated;
    localStorage.setItem("isAuthenticated", authenticated.toString());
  }

  function setUser(userObject: any) {
    user.value = userObject;
    localStorage.setItem("user", JSON.stringify(userObject));
  }

  async function logout() {
    return new Promise(() => {
      //
    });
  }

  return {
    isAuthenticated,
    user,

    logout,
    setIsAuthenticated,
    setUser,
  }
})
