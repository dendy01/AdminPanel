<template>

    <li class="aside-menu__item" v-for="groupItem in group" :key="groupItem.id">
        <RouterLink to="#">
            <component :is="groupItem.icon" class="icon-class"></component>
            {{ groupItem.content }} <ArrowIcon class="icon" v-if="groupItem.select"></ArrowIcon>
        </RouterLink>

        <VSidebarSelectUl v-if="groupItem.select" :select="groupItem.select"></VSidebarSelectUl>
    </li>

</template>

<script setup lang="ts">
import ArrowIcon from "@/assets/icons/arrow.svg";
import VSidebarSelectUl from "@/components/Sidebar/VSidebarSelectUl.vue";
import { ISidebarLink } from '@/model/layout/Sidebar';

interface IPropsType {
    group?: ISidebarLink[];
}

defineProps<IPropsType>();

</script>

<style scoped lang="scss">
.aside-menu__item {
    margin-top: 4px;
    margin-right: 20px;
    padding: var(--padding-menu-item);
    border-radius: 0 50px 50px 0;
    cursor: pointer;
    position: relative;


    &:hover {
        background: var(--color-gray-light);
    }

    a {
        display: flex;
        align-items: center;

        color: var(--color-dark);
    }

    .icon {
        position: absolute;
        right: 20px;

        transition: all .3s ease;
    }

    .icon-class {
        margin-right: 8px;
    }
}
</style>