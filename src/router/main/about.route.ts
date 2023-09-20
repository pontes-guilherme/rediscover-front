export default [
  {
    path: '/about',
    name: 'main.about',
    component: () => import(/* webpackChunkName: "home" */ '@/views/main/about/About.vue'),
    meta: {
      isAdminRoute: false,
    }
  },
]
