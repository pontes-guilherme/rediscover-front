export default [
    {
        path: '/discover',
        name: 'main.discover',
        component: () => import(/* webpackChunkName: "home" */ '@/views/main/discover/Discover.vue'),
        meta: {
            isAdminRoute: false,
        }
    },
]
