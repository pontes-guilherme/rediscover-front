export default [
    {
        path: 'users',
        name: 'admin.users',
        component: () => import(/* webpackChunkName: "home" */ '@/views/admin/users/UsersList.vue'),
        meta: {
            requiresAuth: true,
            isAdminRoute: true,
        }
    },
]
