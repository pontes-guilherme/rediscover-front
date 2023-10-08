export default [
  {
    path: 'projects',
    name: 'admin.projects',
    component: () => import(/* webpackChunkName: "home" */ '@/views/admin/projects/ProjectsList.vue'),
    meta: {
      requiresAuth: true,
      isAdminRoute: true,
    }
  },
  {
    path: 'projects/:id/edit',
    name: 'admin.projects.edit',
    component: () => import(/* webpackChunkName: "home" */ '@/views/admin/projects/ProjectsForm.vue'),
    meta: {
      requiresAuth: true,
      isAdminRoute: true,
    }
  },
]
