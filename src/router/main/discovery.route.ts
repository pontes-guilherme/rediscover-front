export default [
    {
        path: '',
        name: 'main.discovery',
        component: () => import(/* webpackChunkName: "home" */ '@/views/main/home/Home.vue'),
        meta: {
            isAdminRoute: false,
        }
    },
]
