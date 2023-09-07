export default [
    {
        path: '',
        name: 'main.home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/main/home/Home.vue'),
        meta: {
            isAdminRoute: false,
        }
    },
]
