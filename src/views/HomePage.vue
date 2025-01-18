<template>
    <Sidebar
        title="Materio"
        :li="sidebar"
    />
    <VMain />
</template>

<script setup lang="ts">
import HomeSmile from '@/assets/icons/home-smile.svg';
import Toggle from '@/assets/icons/toggle.svg';
import Sidebar from '@/components/Sidebar/VSidebar.vue';
import { ISidebarGroup } from '@/model/layout/Sidebar';
import { provide, shallowRef, useId } from 'vue';

import Notification from '@/assets/icons/icons-header/notification.svg';
import Star from '@/assets/icons/icons-header/star.svg';
import Sun from '@/assets/icons/icons-header/sun.svg';
import Translate from '@/assets/icons/icons-header/translate.svg';
import VMain from '@/views/MainPage.vue';
import { IHeaderGroup } from '@/model/layout/Header';
import { Routes } from '@/routes/modelRoutes.ts';
import Moon from '@/assets/icons/icons-header/moon.svg';
import { TranslateContent } from '@/model/helpers.ts';

const header = shallowRef<IHeaderGroup[]>([
    {
        id: useId(),
        icon: Translate,
        group: [
            {
                id: useId(),
                content: 'English'
            },
            {
                id: useId(),
                content: 'French'
            },
            {
                id: useId(),
                content: 'Arabic'
            },
            {
                id: useId(),
                content: 'Russian'
            }
        ]
    },
    {
        id: useId(),
        icon: Sun,
        group: [
            {
                id: useId(),
                icon: Sun,
                content: 'Light'
            },
            {
                id: useId(),
                icon: Moon,
                content: 'Dark'
            }
        ]
    },
    {
        id: useId(),
        icon: Star,
        group: [
        ]
    },
    {
        id: useId(),
        icon: Notification,
        group: [
        ]
    }
]);

provide('header', header);

const sidebar = shallowRef<ISidebarGroup[]>([
    {
        id: useId(),
        group: [
            {
                id: useId(),
                content: TranslateContent.DASHBOARDS,
                icon: HomeSmile,
                select: [
                    {
                        id: useId(),
                        content: 'CRM'
                    }
                ]
            }
        ]
    },
    {
        id: useId(),
        title: 'Components',
        group: [
            {
                id: useId(),
                content: TranslateContent.USERINTERFACE,
                icon: Toggle,
                select: [
                    {
                        id: useId(),
                        content: 'Alerts',
                        link: Routes.ALERTS
                    },
                    {
                        id: useId(),
                        content: 'Buttons',
                        link: Routes.BUTTONS
                    },
                    {
                        id: useId(),
                        content: 'Dropdowns',
                        link: Routes.DROPDOWN
                    },
                    {
                        id: useId(),
                        content: 'Accordion',
                        link: Routes.ACCORDION
                    }
                ]
            }
        ]
    }
]);
</script>