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
            <span>{{ link.title }}</span>
        </span>

        <VSidebarLi
            v-for="groupItem in link.group"
            :groupItem="groupItem"
            :key="groupItem.id"
            :id="groupItem.id"
            @click="toggle(groupItem.id)"
            :isOpen="isOpen(groupItem.id)"
        ></VSidebarLi>
    </ul>

</template>

<script setup lang="ts">
import VSidebarLi from '@/components/Sidebar/VSidebarLi.vue';
import { ISidebarGroup } from '@/model/layout/Sidebar';
import { ref } from "vue";

interface IPropsType {
    li?: ISidebarGroup[];
}

defineProps<IPropsType>();
const openItem = ref<string | null>(null);

const toggle = (id: string) => {
    openItem.value = openItem.value === id ? null : id;
}

const isOpen = (id: string) => {
    return openItem.value === id;
}
</script>

<style scoped lang="scss">
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
        background: var(--color-gray);
        width: 90%;

        position: absolute;
        top: 70%;
        left: 0;
        z-index: 10;
    }

    span {
        position: relative;
        z-index: 20;
        background: var(--color-white);
    }
}
</style>