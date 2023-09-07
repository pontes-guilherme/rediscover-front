export default [
    {
        path: '/profile/projects',
        name: 'main.profile.projects',
        component: () => import(/* webpackChunkName: "home" */ '@/views/main/my-projects/MyProjects.vue'),
        meta: {
            isAdminRoute: false,
        }
    },
]
