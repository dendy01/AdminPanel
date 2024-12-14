<template>

    <ul
        class="aside-menu__item-grop"
        ref="ulRef"
    >
        <li
            v-for="selectItem in select"
            :key="selectItem.id"
            class="aside-menu__item"
        >
            <RouterLink to="layout">
                <Circle></Circle><span>{{ selectItem.content }}</span>
            </RouterLink>
        </li>
    </ul>

</template>

<script setup lang="ts">
import Circle from "@/assets/icons/circle.svg";
import { ISelect } from '@/model/layout/Sidebar';
import { onMounted, useTemplateRef } from "vue";

interface IPropsType {
    hasActive?: boolean;
    select?: ISelect[];
}

defineProps<IPropsType>();
const emit = defineEmits(["calcHeight"])
const ulRef = useTemplateRef("ulRef");

onMounted(() => {
    if (ulRef.value) {
        emit("calcHeight", ulRef.value.scrollHeight);
    }
})
</script>

<style scoped lang="scss">
.aside-menu__item-grop {
    width: 100%;

    position: absolute;
    top: 40px;
    left: 0;

    background: var(--color-white);

    svg {
        margin-left: 4px;
    }

    span {
        margin-left: 12px;
    }

    a {
        color: var(--color-dark);
    }
}

.aside-menu__item {
    margin-top: 4px;
    padding: var(--padding-menu-item);
    border-radius: 0 50px 50px 0;
    cursor: pointer;
    position: relative;


    &:hover {
        background: var(--color-gray-light);
    }
}
</style>