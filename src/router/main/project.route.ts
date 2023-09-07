export default [
    {
        path: '/projects/add',
        name: 'main.project.add',
        component: () => import(/* webpackChunkName: "home" */ '@/views/main/project/Add.vue'),
        meta: {
            isAdminRoute: false,
        }
    },
]
