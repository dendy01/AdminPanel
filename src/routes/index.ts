import { createRouter, createWebHistory } from 'vue-router';

const BASE_URL = 'AdminPanel';
const routes = [
    {
        name: "Home",
        path: `${BASE_URL}/`,
        component: () => import("@/views/HomeView.vue"),
        children: [
            {
                name: "Layout",
                path: `${BASE_URL}/layout`,
                component: () => import("@/components/VLayout.vue")
            }
        ]
    },
    {
        name: "Login",
        path: `${BASE_URL}/login`,
        component: () => import("@/views/LoginView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;