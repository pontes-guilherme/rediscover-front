// Composables
import {createRouter, createWebHistory} from 'vue-router'
import {useAuthStore} from "@/store/pages/auth/auth.store";

import * as adminUnauthenticatedRoutes from '@/router/admin/unauthenticated'

const routes = [
  ...adminUnauthenticatedRoutes.LoginRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeResolve(async to => {
  const userStore = useAuthStore()

  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    return {name: 'Login'}
  } else if (to.meta.requiresGuest && userStore.isAuthenticated) {
    return {name: 'Home'}
  }
})

export default router
