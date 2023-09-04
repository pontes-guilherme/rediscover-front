export default [
  {
    path: '/admin',
    component: () => import('@/layouts/admin/authenticated/AuthenticatedLayout.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "home" */ '@/views/admin/home/Home.vue'),
        meta: {
          requiresAuth: true,
          isAdminRoute: true,
        }
      },
    ],
  },
]
