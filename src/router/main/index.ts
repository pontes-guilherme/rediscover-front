export default {
    path: '/',
    component: () => import('@/layouts/main/MainLayout.vue'),
    children: [
        {
            path: '',
            name: 'main.home',
            component: () => import(/* webpackChunkName: "home" */ '@/views/main/discovery/Discovery.vue'),
            meta: {
                isAdminRoute: false,
            }
        },
    ],
}

