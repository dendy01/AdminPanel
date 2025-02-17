<template>
    <ul
        class="aside-menu__item-grop"
        :class="{ activeUl: isOpen && isValid }"
        ref="ulRef"
    >
        <li
            v-for="selectItem in select"
            :key="selectItem.id"
        >
            <RouterLink
                active-class="active-link"
                :to="selectItem.link ? selectItem.link : 'layout'"
                class="aside-menu__item"
                @click="handleLink(selectItem.id)"
            >
                <Circle /><span>{{ contentLength(selectItem.content) }}</span>
            </RouterLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
import Circle from '@/assets/icons/circle.svg';
import { ISelect } from '@/model/layout/Sidebar';
import { onMounted, ref, useTemplateRef } from 'vue';

interface IPropsType {
    hasActive?: boolean;
    select?: ISelect[];
    isOpen: boolean;
    isValid: boolean;
}

interface IEmitsType {
    (event: 'calcHeight', value: number): void;
}

defineProps<IPropsType>();
const emit = defineEmits<IEmitsType>();
const ulRef = useTemplateRef('ulRef');
const currentId = ref<string | null>(null);
const height = ref<number>(0);

const handleLink = (id: string) => {
    currentId.value = currentId.value === id ? null : id;
};

const contentLength = (content: string) => {
    return content.length > 20 ? content.slice(0, 20) + '...' : content;
};

onMounted(() => {
    if (ulRef.value) {
        height.value = ulRef.value.scrollHeight;

        emit('calcHeight', ulRef.value.scrollHeight);
    }
});
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.aside-menu__item-grop {
    --height: v-bind(height);

    height: var(--height);
    width: 100%;

    position: absolute;
    top: 40px;
    left: 0;
    opacity: 0;

    transition: opacity $transition-time $transition-duration;

    svg {
        margin-left: 4px;
    }

    span {
        margin-left: 12px;
    }

    a {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;

        color: var(--color-text);

        &:hover {
            background-color: var(--color-gray-light);
        }

        span {
            text-wrap: nowrap;
        }
    }

    &.activeUl {
        opacity: 1;
    }

    .active-link {
        color: var(--color-white);
        background-color: var(--color-primary-700);

        &:hover {
            background-color: var(--color-primary-600);
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