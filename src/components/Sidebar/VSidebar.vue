<template>
    <aside
        class="aside"
        :class="{ 'aside-active': isCheck }"
        @mouseenter="isOpenSidebar = true"
        @mouseleave="isOpenSidebar = false"
    >
        <div class="aside-head">
            <RouterLink to="#">
                <span class="aside-head__logo">
                    <LogoIcon />
                    <h2 class="aside-title">{{ title }}</h2>
                </span>
            </RouterLink>

            <input
                type="checkbox"
                class="aside-head__input"
                @change="isCheck = !isCheck"
            >
        </div>

        <div class="aside-body">
            <VSidebarUl
                :is-check="isCheck"
                :is-open-sidebar="isOpenSidebar"
                :li="li"
            />
        </div>
    </aside>
</template>

<script setup lang="ts">
import LogoIcon from '@/assets/icons/logo.svg';
import VSidebarUl from '@/components/Sidebar/VSidebarUl.vue';
import { ISidebarGroup } from '@/model/layout/Sidebar';
import { ref } from 'vue';

interface IPropsType {
    title?: string,
    li?: ISidebarGroup[];
}

defineProps<IPropsType>();

const isCheck = ref<boolean>(false);
const isOpenSidebar = ref<boolean>(false);
</script>


<style scoped lang="scss">
.aside {
    width: 80px;
    height: 100%;
    font-size: 15px;
    font-weight: 400;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: all .3s ease;

    color: var(--color-dark);
    background: var(--bg-primery);

    &:hover {
        width: 260px;
        padding-right: 4px;
        box-shadow: 0 0 5px;

        .aside-title,
        .aside-head__input {
            display: block;
        }
    }

    .aside-title,
    .aside-head__input {
        display: none;
    }
}

.aside-active {
    width: 260px;

    &:hover {
        padding-right: 0;
        box-shadow: none;
    }

    .aside-title,
    .aside-head__input {
        display: block;
    }
}

.aside-head {
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: var(--padding-menu-item);

    .aside-head__logo {
        display: flex;
        color: var(--color-purple);

        .aside-title {
            font-size: 20px;
            font-weight: 600;
            text-transform: uppercase;

            margin-left: 12px;

            color: var(--color-dark);
        }
    }
}

.aside-body {
    max-height: calc(100% - 64px);
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 2px;
        background: none;
    }

    &:hover::-webkit-scrollbar-thumb {
        background: var(--color-gray);
        transition: all .3s ease;
    }
}

@media (max-width: 920px) {}
</style>