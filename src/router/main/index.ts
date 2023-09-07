import discoveryRoutes from "@/router/main/discovery.route";
import projectRoutes from "@/router/main/project.route";

export default {
    path: '/',
    component: () => import('@/layouts/main/MainLayout.vue'),
    children: [
        ...discoveryRoutes,
        ...projectRoutes,
    ],
}

