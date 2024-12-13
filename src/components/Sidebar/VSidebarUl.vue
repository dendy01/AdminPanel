<template>

    <ul class="aside-menu" v-for="(link, index) in li" :key="link.id">
        <span v-if="link.title" class="aside-menu__title">
            <span>{{ link.title }} {{ index }}</span>
        </span>

        <VSidebarLi :group="link.group"></VSidebarLi>
    </ul>

</template>

<script setup lang="ts">
import VSidebarLi from '@/components/Sidebar/VSidebarLi.vue';
import { ISidebarGroup } from '@/model/layout/Sidebar';

interface IPropsType {
    li?: ISidebarGroup[];
}

defineProps<IPropsType>();

</script>

<style scoped lang="scss">
.aside-menu__title {
    padding: var(--padding-menu-item);
    margin-top: 30px;
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
        top: 50%;
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