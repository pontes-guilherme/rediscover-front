import adminHomeRoutes from './home.route'
import adminUserRoutes from './user.route'

export default {
    path: '/admin',
    component: () => import('@/layouts/admin/authenticated/AuthenticatedLayout.vue'),
    children: [
        ...adminHomeRoutes,
        ...adminUserRoutes,
    ],
}
