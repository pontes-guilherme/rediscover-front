import homeRoutes from "@/router/main/home.route";
import projectRoutes from "@/router/main/project.route";
import discoverRoutes from "@/router/main/discover.route";

export default {
    path: '/',
    component: () => import('@/layouts/main/MainLayout.vue'),
    children: [
        ...homeRoutes,
        ...projectRoutes,
        ...discoverRoutes,
    ],
}

