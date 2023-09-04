export default [
  {
    path: '/admin/login',
    component: () => import('@/layouts/admin/unauthenticated/UnauthenticatedLayout.vue'),
    children: [
      {
        path: '',
        name: 'AdminLogin',
        component: () => import(/* webpackChunkName: "home" */ '@/views/admin/login/Login.vue'),
        meta: {
          requiresGuest: true,
          isAdminRoute: true,
        }
      },
    ],
  },
]
