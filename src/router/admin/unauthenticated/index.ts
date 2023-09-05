import AdminLoginRoutes from './login.route';

export default {
    path: '/admin/login',
    component: () => import('@/layouts/admin/unauthenticated/UnauthenticatedLayout.vue'),
    children: [
        ...AdminLoginRoutes,
    ],
}

