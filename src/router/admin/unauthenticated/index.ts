import AdminLoginRoutes from './login.route';
import AdminPasswordRecoveryRoutes from './password-recovery.route';

export default {
  path: '/admin/login',
  component: () => import('@/layouts/admin/unauthenticated/UnauthenticatedLayout.vue'),
  children: [
    ...AdminLoginRoutes,
    ...AdminPasswordRecoveryRoutes,
  ],
}

