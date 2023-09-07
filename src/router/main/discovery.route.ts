export default [
    {
        path: '',
        name: 'main.discovery',
        component: () => import(/* webpackChunkName: "home" */ '@/views/main/discovery/Discovery.vue'),
        meta: {
            isAdminRoute: false,
        }
    },
]
