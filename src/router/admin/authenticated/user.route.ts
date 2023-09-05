export default [
    {
        path: 'users',
        name: 'AdminUsers',
        component: () => import(/* webpackChunkName: "home" */ '@/views/admin/users/UsersList.vue'),
        meta: {
            requiresAuth: true,
            isAdminRoute: true,
        }
    },
]
