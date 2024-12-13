import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import("@/views/HomeView.vue"),
        children: [
            {
                name: "Layout",
                path: "layout",
                component: () => import("@/components/VLayout.vue")
            }
        ]
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("@/views/LoginView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;