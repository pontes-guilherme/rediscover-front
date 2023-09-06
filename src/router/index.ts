// Composables
import {createRouter, createWebHistory} from 'vue-router'
import {useAuthStore} from "@/store/pages/admin/auth/auth.store";

import adminUnauthenticatedRoutes from '@/router/admin/unauthenticated'
import adminAuthenticatedRoutes from '@/router/admin/authenticated'
import mainRoutes from '@/router/main'

const routes = [
  mainRoutes,
  adminUnauthenticatedRoutes,
  adminAuthenticatedRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeResolve(async to => {
  const adminAuthStore = useAuthStore()

  // console.log({
  //   isAdminRoute:to.meta.isAdminRoute,
  //   isAuthenticated: adminAuthStore.isAuthenticated,
  //   requriesAuth: to.meta.requiresAuth,
  // })

  if (to.meta.isAdminRoute) {
    if (to.meta.requiresAuth && !adminAuthStore.isAuthenticated) {
      return {name: 'admin.login'}
    } else if (to.meta.requiresGuest && adminAuthStore.isAuthenticated) {
      return {name: 'admin.home'}
    }
  }
})

export default router
