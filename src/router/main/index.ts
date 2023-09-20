import homeRoutes from "@/router/main/home.route";
import projectRoutes from "@/router/main/project.route";
import discoverRoutes from "@/router/main/discover.route";
import profileRoutes from "@/router/main/profile.route";
import aboutRoutes from "@/router/main/about.route";
import contactRoutes from "@/router/main/contact.route";

export default {
  path: '/',
  component: () => import('@/layouts/main/MainLayout.vue'),
  children: [
    ...homeRoutes,
    ...projectRoutes,
    ...discoverRoutes,
    ...profileRoutes,
    ...aboutRoutes,
    ...contactRoutes,
  ],
}

