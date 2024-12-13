<template>

    <ul class="aside-menu__item-grop">
        <li v-for="selectItem in select" :key="selectItem.id">
            <RouterLink to="layout">
                <Circle></Circle><span>{{ selectItem.content }}</span>
            </RouterLink>
        </li>
    </ul>

</template>

<script setup lang="ts">
import Circle from "@/assets/icons/circle.svg";
import { ISelect } from '@/model/layout/Sidebar';

interface IPropsType {
    select?: ISelect[];
}

defineProps<IPropsType>();

</script>

<style scoped lang="scss">
.aside-menu__item-grop {
    max-height: 0;
    background-color: white;
    transition: max-height 0.5s linear;
    overflow: hidden;

    svg {
        margin-left: 4px;
    }

    span {
        margin-left: 12px;
    }
}
</style>