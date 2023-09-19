export default [
  {
    path: 'users',
    name: 'admin.users',
    component: () => import(/* webpackChunkName: "home" */ '@/views/admin/users/UsersList.vue'),
    meta: {
      requiresAuth: true,
      isAdminRoute: true,
    }
  },
  {
    path: 'users/:id/edit',
    name: 'admin.users.edit',
    component: () => import(/* webpackChunkName: "home" */ '@/views/admin/users/UsersForm.vue'),
    meta: {
      requiresAuth: true,
      isAdminRoute: true,
    }
  },
  {
    path: 'users/create',
    name: 'admin.users.create',
    component: () => import(/* webpackChunkName: "home" */ '@/views/admin/users/UsersForm.vue'),
    meta: {
      requiresAuth: true,
      isAdminRoute: true,
    }
  },
]
