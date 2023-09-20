export default [
  {
    path: '/contact',
    name: 'main.contact',
    component: () => import(/* webpackChunkName: "home" */ '@/views/main/contact/Contact.vue'),
    meta: {
      isAdminRoute: false,
    }
  },
]
