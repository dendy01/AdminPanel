<template>
    <aside
        class="aside"
        :class="{
            'aside-active': isCheck.checking,
            'open-menu': isCheck.openMenu
        }"
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
                v-if="!isCheck.openMenu"
                type="checkbox"
                class="aside-head__input"
                @change="isCheck.checking = !isCheck.checking"
                v-model="inputChecked"
            >
            <span
                v-else
                class="aside-head__close"
                @click="isCheck.openMenu = !isCheck.openMenu"
            >
                <CloseIcon />
            </span>
        </div>

        <div class="aside-body">
            <VSidebarUl
                :is-open-sidebar="isOpenSidebar"
                :li="li"
            />
        </div>
    </aside>
</template>

<script setup lang="ts">
import CloseIcon from '@/assets/icons/icons-header/close.svg';
import LogoIcon from '@/assets/icons/logo.svg';
import VSidebarUl from '@/components/Sidebar/VSidebarUl.vue';
import { ISidebarGroup } from '@/model/layout/Sidebar';
import { useChecking } from '@/store/useCheck.ts';
import { onMounted, onUnmounted, ref } from 'vue';

interface IPropsType {
    title?: string,
    li?: ISidebarGroup[];
}

defineProps<IPropsType>();

const isCheck = useChecking();
const isOpenSidebar = ref<boolean>(false);
const inputChecked = ref<boolean>(false);

const resizeDisplay = () => {
    if (window.innerWidth > isCheck.responseSw) {
        isCheck.openMenu = false;
    } else {
        isCheck.checking = false;
        inputChecked.value = false;
    }
};

onMounted(() => {
    window.addEventListener('resize', resizeDisplay);
});

onUnmounted(() => {
    window.removeEventListener('resize', resizeDisplay);
});
</script>


<style scoped lang="scss">
@import '@/style/variables.scss';

.aside {
    width: 80px;
    height: 100%;
    font-size: var(--font-size-lg);
    font-weight: 400;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    transition: width var(--duration) var(--timing-function);

    color: var(--color-text);
    background-color: var(--bg-primary);

    &:hover {
        width: $sidebar-width;
        padding-right: var(--padding-sm);
        box-shadow: 0 0 5px;
        transition: width var(--duration) var(--timing-function);

        .aside-title,
        .aside-head__input {
            display: block;
        }
    }

    .aside-head__close {
        cursor: pointer;
    }

    .aside-title,
    .aside-head__input {
        display: none;
    }
}

.aside-active {
    width: $sidebar-width;

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
        color: var(--color-primary-700);

        .aside-title {
            font-size: var(--font-size-xxxl);
            font-weight: 600;
            text-transform: uppercase;

            margin-left: var(--margin-lg);

            color: var(--color-text);
        }
    }
}

.aside-body {
    max-height: calc(100%);
    //overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 2px;
        background: none;
    }

    &:hover::-webkit-scrollbar-thumb {
        background-color: var(--color-gray);
        transition: background-color var(--duration) var(--timing-function);
    }
}

@media (max-width: $response-sw) {
    .aside {
        transition: transform var(--duration) var(--timing-function);
        transform: translateX(-$sidebar-width);
    }

    .aside-active {
        transition: transform var(--duration) var(--timing-function);
        transform: translateX(-$sidebar-width);
    }

    .open-menu {
        width: $sidebar-width;
        transform: translateX(0px);
        box-shadow: 0 0 5px;
        transition: transform var(--duration) var(--timing-function);

        &:hover {
            padding-right: 0;
        }

        .aside-title,
        .aside-head__input {
            display: block;
        }
    }
}
</style>