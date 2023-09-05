export default [
    {
        path: '',
        name: 'admin.home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/admin/home/Home.vue'),
        meta: {
            requiresAuth: true,
            isAdminRoute: true,
        }
    },
]
