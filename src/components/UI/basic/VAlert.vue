<template>
    <div
        v-if="isVisible"
        :class="[
            'alert',
            `alert-${ color }`,
            basic && 'basic',
            outline && 'outline',
            close && 'close'
        ]"
    >
        <span
            v-if="icon"
            class="alert-icon"
        >
            <component :is="icon" />
        </span>
        <slot />
        <CloseIcon
            v-if="close"
            class="alert-close"
            @click="removeAlert"
        />
    </div>
</template>

<script setup lang="ts">
import { colors, GlobalColors } from '@/GlobalColors.ts';
import CloseIcon from '@/assets/icons/icons-header/close.svg';
import { computed, ref } from 'vue';

interface IPropsType {
    color: GlobalColors;
    basic?: boolean;
    outline?: boolean;
    close?: boolean;
    icon?: any;
}

const props = defineProps<IPropsType>();
const isVisible = ref(true);

const alertColor = computed(() => colors[props.color]['700']);
const alertBasicBgColor = computed(() => colors[props.color]['500']);
const alertIconHover = computed(() => colors[props.color]['600']);

const removeAlert = () => {
    isVisible.value = false;
};
</script>

<style scoped>
.alert {
    --alert-color: v-bind(alertColor);
    --alert-basic-bg: v-bind(alertBasicBgColor);
    --alert-icon-hover: v-bind(alertIconHover);

    padding: var(--padding-xl);
    margin-bottom: var(--margin-xl);
    border-radius: var(--border-radius-xl);
    font-size: var(--font-size-xl);
    background-color: var(--alert-color);
    color: var(--color-white);

    display: flex;
    align-items: center;

    &:last-of-type {
        margin-bottom: 0;
    }

    &.basic {
        background-color: var(--alert-basic-bg);
        color: var(--alert-color);
    }

    &.outline {
        outline: 1px solid var(--alert-color);
        background-color: transparent;
        color: var(--alert-color);
    }

    &.close {
        justify-content: space-between;
    }

    .alert-icon {
        padding: var(--padding-sm);
        margin-right: var(--margin-xl);
        border-radius: var(--border-radius-xl);

        display: flex;

        background-color: var(--color-white);
        color: var(--alert-color);
    }

    .alert-close {
        width: 20px;
        height: 20px;
        cursor: pointer;

        &:hover {
            color: var(--alert-icon-hover);
        }
    }
}
</style>