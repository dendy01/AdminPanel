import { createRouter, createWebHistory } from 'vue-router';
import { Routes } from '@/routes/modelRoutes.ts';

const BASE_URL = '/AdminPanel';

const routes = [
    {
        name: Routes.HOME,
        path: `${BASE_URL}/`,
        component: () => import('@/views/HomePage.vue'),
        children: [
            {
                name: Routes.LAYOUT,
                path: `${BASE_URL}/${Routes.LAYOUT}`,
                component: () => import('@/components/VLayout.vue')
            },
            {
                name: Routes.BUTTONS,
                path: `${BASE_URL}/${Routes.BUTTONS}`,
                component: () => import('@/components/Main/Buttons/VButtons.vue')
            },
            {
                name: Routes.ALERTS,
                path: `${BASE_URL}/${Routes.ALERTS}`,
                component: () => import('@/components/Main/Alerts/VAlerts.vue')
            },
            {
                name: Routes.DROPDOWN,
                path: `${BASE_URL}/${Routes.DROPDOWN}`,
                component: () => import('@/components/Main/Dropdown/VDropdowns.vue')
            }
        ]
    },
    {
        name: 'Login',
        path: `${BASE_URL}/login`,
        component: () => import('@/views/LoginPage.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;