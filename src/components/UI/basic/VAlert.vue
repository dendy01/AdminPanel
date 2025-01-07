<template>
    <div
        v-if="isVisible"
        :class="[
            'alert',
            `alert-${ alertType }`,
            basik && 'basik',
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
        <Close
            v-if="close"
            class="alert-close"
            @click="removeAlert"
        />
    </div>
</template>

<script setup lang="ts">
import { getColors, GlobalColors } from '@/model/GlobalColors.ts';
import Close from '@/assets/icons/icons-header/close.svg';
import { computed, ref } from 'vue';

interface AlertPropsType {
    alertType: GlobalColors;
    basik?: boolean;
    outline?: boolean;
    close?: boolean;
    icon?: any;
}

const props = defineProps<AlertPropsType>();
const colors = getColors();
const isVisible = ref(true);

const alertColor = computed(() => colors[props.alertType]['700']);
const alertBasikBgColor = computed(() => colors[props.alertType]['500']);
const alertIconHover = computed(() => colors[props.alertType]['600']);

const removeAlert = () => {
    isVisible.value = false;
};
</script>

<style scoped>
.alert {
    --alert-color: v-bind(alertColor);
    --alert-basik-bg: v-bind(alertBasikBgColor);
    --alert-icon-hover: v-bind(alertIconHover);

    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    font-size: 16px;
    background-color: var(--alert-color);
    color: var(--color-white);

    display: flex;
    align-items: center;

    &:last-of-type {
        margin-bottom: 0;
    }

    &.basik {
        background-color: var(--alert-basik-bg);
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
        padding: 4px;
        margin-right: 16px;
        border-radius: 8px;

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