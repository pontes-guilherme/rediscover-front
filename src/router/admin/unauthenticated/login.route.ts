export default [
    {
        path: '',
        name: 'admin.login',
        component: () => import(/* webpackChunkName: "home" */ '@/views/admin/login/Login.vue'),
        meta: {
            requiresGuest: true,
            isAdminRoute: true,
        }
    },
]
