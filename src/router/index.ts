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

router.beforeEach(async (to, from) => {
    if (to.meta.oneTimePage && !from.name) {
        return {name: 'main.home'}
    }
})

router.beforeResolve(async to => {
    const adminAuthStore = useAuthStore()

    // console.log({
    //     isAdminRoute: to.meta.isAdminRoute,
    //     isAuthenticated: adminAuthStore.isAuthenticated,
    //     requriesAuth: to.meta.requiresAuth,
    //     redirectedFrom: to
    // })

    if (to.meta.isAdminRoute) {
        if (to.meta.requiresAuth && !adminAuthStore.isAuthenticated) {
            return {name: 'admin.login'}
        }
        else if (to.meta.requiresGuest && adminAuthStore.isAuthenticated) {
            return {name: 'admin.users'}
        }
    }
})

export default router
