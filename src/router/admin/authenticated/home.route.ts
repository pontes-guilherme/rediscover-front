export default [
    {
        path: '/',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "home" */ '@/views/admin/home/Home.vue'),
        meta: {
            requiresAuth: true,
            isAdminRoute: true,
        }
    },
]
