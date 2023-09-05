export default [
    {
        path: '',
        name: 'AdminLogin',
        component: () => import(/* webpackChunkName: "home" */ '@/views/admin/login/Login.vue'),
        meta: {
            requiresGuest: true,
            isAdminRoute: true,
        }
    },
]
