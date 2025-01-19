<template>
    <ul
        class="aside-menu"
        v-for="link in li"
        :key="link.id"
    >
        <span
            v-if="link.title"
            class="aside-menu__title"
        >
            <span :class="{ open: isCheck.checking || isOpenSidebar || isCheck.openMenu }">{{ link.title }}</span>
        </span>

        <VSidebarLi
            v-for="groupItem in link.group"
            :group-item="groupItem"
            :key="groupItem.id"
            :id="groupItem.id"
            :is-open-sidebar="isOpenSidebar"
            :is-open="isOpen(groupItem.id)"
            @click="isId(groupItem.id)"
        />
    </ul>
</template>

<script setup lang="ts">
import VSidebarLi from '@/components/Sidebar/VSidebarLi.vue';
import { ISidebarGroup } from '@/model/layout/Sidebar';
import { useChecking } from '@/store/useCheck.ts';
import { ref } from 'vue';

interface IPropsType {
    li?: ISidebarGroup[];
    isOpenSidebar: boolean;
}

defineProps<IPropsType>();
const currentId = ref<string | null>(null);
const isCheck = useChecking();

const isId = (id: string) => {
    currentId.value = currentId.value === id ? null : id;
};

const isOpen = (id: string) => {
    return currentId.value === id;
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.aside-menu {
    position: relative;
    z-index: 200;
    background-color: var(--bg-primary);
}

.aside-menu:last-child {
    margin: 4px 0;
}

.aside-menu__title {
    padding: var(--padding-menu-item);
    padding-top: 30px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    color: var(--color-gray);

    display: block;

    position: relative;

    &::before {
        content: "";
        display: block;
        height: 1px;
        background-color: var(--color-gray);
        width: 90%;

        position: absolute;
        top: 70%;
        left: 0;
        z-index: 10;
    }

    span {
        text-wrap: nowrap;
        opacity: 0;
        position: relative;
        z-index: 20;
        background-color: var(--bg-primary);
        transition: opacity var(--duration) var(--timing-function);
    }

    .open {
        opacity: 1;
    }
}
</style>