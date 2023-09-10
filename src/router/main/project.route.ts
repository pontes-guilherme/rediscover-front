export default [
    {
        path: '/projects/add',
        name: 'main.project.add',
        component: () => import(/* webpackChunkName: "home" */ '@/views/main/add-project/Add.vue'),
        meta: {
            isAdminRoute: false,
        }
    },
  {
    path: '/projects/add/details',
    name: 'main.project.add.details',
    component: () => import(/* webpackChunkName: "home" */ '@/views/main/add-project/Details.vue'),
    meta: {
      isAdminRoute: false,
    }
  },
]
