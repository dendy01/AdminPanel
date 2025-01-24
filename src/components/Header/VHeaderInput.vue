<template>
    <label
        ref="refLabel"
        class="header-search__wrap"
        :style="{ display: isActive ? 'block' : 'none' }"
    >
        <input
            type="text"
            :class="{ 'header-observer': isScrolling }"
            class="header-search__input"
            placeholder="Search..."
            ref="inputSearch"
        >
        <Close
            @click="setActive"
            class="header-search__close"
        />
    </label>
</template>

<script setup lang="ts">
import Close from '@/assets/icons/icons-header/close.svg';
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue';

interface IPropsType {
    isActive: boolean;
    isScrolling: boolean;
}

interface IEmitsType {
    (event: 'changeActive', value: boolean): void;
}

defineProps<IPropsType>();
const emit = defineEmits<IEmitsType>();
const inputSearch = useTemplateRef('inputSearch');
const refLabel = ref<HTMLElement | null>(null);
const labelIs = ref<boolean>(false);

const setActive = () => {
    emit('changeActive', false);
};

const isLabel = (event: any) => {
    if (labelIs.value && !refLabel.value?.contains(event.target)) {
        emit('changeActive', false);
    } else {
        labelIs.value = true;
    }
};

onMounted(() => {
    if (inputSearch.value) {
        inputSearch.value.focus();
    }

    document.addEventListener('click', isLabel);
});

onUnmounted(() => {
    document.removeEventListener('click', isLabel);
});
</script>

<style lang="scss">
.header-search__wrap {
    height: 100%;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    .header-search__input {
        height: 100%;
        width: 100%;
        font-size: var(--font-size-16);
        color: var(--color-text);

        position: absolute;
        top: 0;
        left: 0;

        background-color: var(--bg-primary);
    }

    .header-search__input::placeholder {
        font-size: var(--font-size-16);
    }

    .header-search__close {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);

        cursor: pointer;
    }
}

.header-observer {
    opacity: .9;
    padding: 0 var(--padding-16);
    border-radius: 0 0 var(--border-radius-8) var(--border-radius-8);
    background-color: var(--bg-card) !important;

    .header-search__close {
        right: 16px;
    }
}
</style>