export default [
  {
    path: '/admin/login',
    component: () => import('@/layouts/admin/unauthenticated/UnauthenticatedLayout.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import(/* webpackChunkName: "home" */ '@/views/login/Login.vue'),
        meta: { requiresGuest: true }
      },
    ],
  },
]
