// Composables
import {createRouter, createWebHistory} from 'vue-router'
import {useAuthStore} from "@/store/pages/admin/auth/auth.store";

import adminUnauthenticatedRoutes from '@/router/admin/unauthenticated'
import adminAuthenticatedRoutes from '@/router/admin/authenticated'

const routes = [
  adminUnauthenticatedRoutes,
  adminAuthenticatedRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeResolve(async to => {
  const adminAuthStore = useAuthStore()

  console.log({
    isAdminRoute:to.meta.isAdminRoute,
    isAuthenticated: adminAuthStore.isAuthenticated,
    requriesAuth: to.meta.requiresAuth,
  })

  if (to.meta.isAdminRoute) {
    if (to.meta.requiresAuth && !adminAuthStore.isAuthenticated) {
      return {name: 'AdminLogin'}
    } else if (to.meta.requiresGuest && adminAuthStore.isAuthenticated) {
      return {name: 'AdminHome'}
    }
  }
})

export default router
