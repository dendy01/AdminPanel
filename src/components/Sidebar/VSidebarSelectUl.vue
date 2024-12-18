<template>

    <ul
        class="aside-menu__item-grop"
        ref="ulRef"
    >
        <li
            v-for="selectItem in select"
            :key="selectItem.id"
        >
            <RouterLink
                to="layout"
                class="aside-menu__item"
                :class="{ active: isActive(selectItem.id) }"
                @click="handleLink(selectItem.id)"
            >
                <Circle></Circle><span>{{ selectItem.content }}</span>
            </RouterLink>
        </li>
    </ul>

</template>

<script setup lang="ts">
import Circle from "@/assets/icons/circle.svg";
import { ISelect } from '@/model/layout/Sidebar';
import { onMounted, ref, useTemplateRef } from "vue";

interface IPropsType {
    hasActive?: boolean;
    select?: ISelect[];
}

defineProps<IPropsType>();
const emit = defineEmits(["calcHeight"])
const ulRef = useTemplateRef("ulRef");
const currentId = ref<string | null>(null);

const handleLink = (id: string) => {
    currentId.value = currentId.value === id ? null : id;
}

const isActive = (id: string) => {
    return currentId.value === id;
}

onMounted(() => {
    if (ulRef.value) {
        emit("calcHeight", ulRef.value.scrollHeight);
    }
});
</script>

<style scoped lang="scss">
.aside-menu__item-grop {
    width: 100%;

    position: absolute;
    top: 40px;
    left: 0;

    svg {
        margin-left: 4px;
    }

    span {
        margin-left: 12px;
    }

    a {
        color: var(--color-dark);

        &:hover {
            background: var(--color-gray-light);
        }
    }

    .active {
        color: var(--color-white);
        background: var(--color-purple);

        &:hover {
            background: var(--color-purple);
        }
    }
}

.aside-menu__item {
    margin-top: 4px;
    padding: var(--padding-menu-item);
    border-radius: 0 50px 50px 0;
    cursor: pointer;
    position: relative;
    display: block;
}
</style>