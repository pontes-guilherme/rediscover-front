export default [
    {
        path: '/profile/projects',
        name: 'main.profile.projects',
        component: () => import(/* webpackChunkName: "home" */ '@/views/main/my-projects/MyProjects.vue'),
        meta: {
            isAdminRoute: false,
        }
    },
  {
    path: '/profile/comments',
    name: 'main.profile.comments',
    component: () => import(/* webpackChunkName: "home" */ '@/views/main/my-comments/MyComments.vue'),
    meta: {
      isAdminRoute: false,
    }
  },
]
