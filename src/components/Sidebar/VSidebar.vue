<template>

    <aside
        class="aside"
        ref="asideWidth"
        :style="{ width: 260 + 'px' }"
    >
        <div class="aside-head">
            <RouterLink to="#">
                <span class="aside-head__logo">
                    <LogoIcon></LogoIcon>
                    <h2 class="aside-title">{{ title }}</h2>
                </span>
            </RouterLink>

            <input type="checkbox" />
        </div>

        <div class="aside-body">
            <VSidebarUl :li="li"></VSidebarUl>
        </div>

    </aside>

</template>

<script setup lang="ts">
import LogoIcon from '@/assets/icons/logo.svg';
import VSidebarUl from '@/components/Sidebar/VSidebarUl.vue';
import { ISidebarGroup } from '@/model/layout/Sidebar';

interface IPropsType {
    title?: string,
    li?: ISidebarGroup[];
}

defineProps<IPropsType>();

</script>


<style scoped lang="scss">
.aside {
    height: 100%;
    font-size: 15px;
    font-weight: 400;

    position: fixed;
    top: 0;
    left: 0;
    transition: all .3s ease;
    color: var(--color-dark);
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

@media (max-width: 920px) {
    .aside {
        transform: translateX(-260px);
    }
}
</style>