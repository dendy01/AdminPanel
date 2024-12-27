import { createRouter, createWebHistory } from 'vue-router';
import { Routes } from '@/routes/modelRoutes.ts';

const BASE_URL = '/AdminPanel';

const routes = [
    {
        name: 'Home',
        path: `${BASE_URL}/`,
        component: () => import('@/views/VHome.vue'),
        children: [
            {
                name: 'Layout',
                path: `${BASE_URL}/${Routes.Layout}`,
                component: () => import('@/components/VLayout.vue')
            },
            {
                name: 'Button',
                path: `${BASE_URL}/${Routes.Buttons}`,
                component: () => import('@/components/Main/Buttons/VButtons.vue')
            }
        ]
    },
    {
        name: 'Login',
        path: `${BASE_URL}/login`,
        component: () => import('@/views/VLogin.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;