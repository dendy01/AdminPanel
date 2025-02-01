import { createRouter, createWebHistory } from 'vue-router';

const BASE_URL = '/AdminPanel';

export const Routes = {
    HOME: 'home',
    BUTTONS: 'buttons',
    LAYOUT: 'layout',
    ALERTS: 'alerts',
    DROPDOWN: 'dropdowns',
    ACCORDION: 'accordion',
    BADGES: 'badges',
    CRM: 'crm',
    MODALS: 'modals'
};

const routes = [
    {
        name: Routes.HOME,
        path: `${BASE_URL}/`,
        component: () => import('@/views/HomePage.vue'),
        children: [
            {
                name: Routes.CRM,
                path: `${BASE_URL}/${Routes.CRM}`,
                component: () => import('@/views/PreviewCRMPage.vue')
            },
            {
                name: Routes.BUTTONS,
                path: `${BASE_URL}/${Routes.BUTTONS}`,
                component: () => import('@/views/PreviewButtonsPage.vue')
            },
            {
                name: Routes.ALERTS,
                path: `${BASE_URL}/${Routes.ALERTS}`,
                component: () => import('@/views/PreviewAlertsPage.vue')
            },
            {
                name: Routes.DROPDOWN,
                path: `${BASE_URL}/${Routes.DROPDOWN}`,
                component: () => import('@/views/PreviewDropdownsPage.vue')
            },
            {
                name: Routes.BADGES,
                path: `${BASE_URL}/${Routes.BADGES}`,
                component: () => import('@/views/PreviewBadgesPage.vue')
            },
            {
                name: Routes.ACCORDION,
                path: `${BASE_URL}/${Routes.ACCORDION}`,
                component: () => import('@/views/PreviewAccordionsPage.vue')
            },
            {
                name: Routes.MODALS,
                path: `${BASE_URL}/${Routes.MODALS}`,
                component: () => import('@/views/PreviewModalsPage.vue')
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