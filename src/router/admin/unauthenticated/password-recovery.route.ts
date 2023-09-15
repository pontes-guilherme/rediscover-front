export default [
    {
        path: '/admin/password-recovery/step-1',
        name: 'admin.password-recovery.step-1',
        component: () => import(/* webpackChunkName: "home" */ '@/views/admin/password-recovery/Step1.vue'),
        meta: {
            requiresGuest: true,
            isAdminRoute: true,
        }
    },
  {
    path: '/admin/password-recovery/step-2',
    name: 'admin.password-recovery.step-2',
    component: () => import(/* webpackChunkName: "home" */ '@/views/admin/password-recovery/Step2.vue'),
    meta: {
      requiresGuest: true,
      isAdminRoute: true,
    }
  },
]
