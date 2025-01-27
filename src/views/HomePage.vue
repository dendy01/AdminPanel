<template>
    <Sidebar
        title="Materio"
        :li="sidebar"
    />
    <VMain />
</template>

<script setup lang="ts">
import HomeSmileIcon from '@/assets/icons/home-smile.svg';
import ToggleIcon from '@/assets/icons/toggle.svg';
import Sidebar from '@/components/Sidebar/VSidebar.vue';
import { ISidebarGroup } from '@/model/layout/Sidebar';
import { provide, shallowRef, useId } from 'vue';

import NotificationIcon from '@/assets/icons/icons-header/notification.svg';
import StarIcon from '@/assets/icons/icons-header/star.svg';
import SunIcon from '@/assets/icons/icons-header/sun.svg';
import TranslateIcon from '@/assets/icons/icons-header/translate.svg';
import VMain from '@/views/MainPage.vue';
import { IHeaderGroup } from '@/model/layout/Header';
import { Routes } from '@/routes/index.ts';
import MoonIcon from '@/assets/icons/icons-header/moon.svg';
import { TranslateContent } from '@/model/helpers.ts';

const header = shallowRef<IHeaderGroup[]>([
    {
        id: useId(),
        icon: TranslateIcon,
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
        icon: SunIcon,
        group: [
            {
                id: useId(),
                icon: SunIcon,
                content: 'Light'
            },
            {
                id: useId(),
                icon: MoonIcon,
                content: 'Dark'
            }
        ]
    },
    {
        id: useId(),
        icon: StarIcon,
        group: [
        ]
    },
    {
        id: useId(),
        icon: NotificationIcon,
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
                icon: HomeSmileIcon,
                select: [
                    {
                        id: useId(),
                        content: 'CRM',
                        link: Routes.CRM
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
                icon: ToggleIcon,
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
                    },
                    {
                        id: useId(),
                        content: 'Badges',
                        link: Routes.BADGES
                    }
                ]
            }
        ]
    }
]);
</script>