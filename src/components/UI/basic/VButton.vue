<template>
    <button
        :class="[
            'btn',
            `btn-${ color }`,
            btnSize,
            btnState,
            round && 'round',
            label && 'label',
            outline && 'outline',
            btnText && 'btn-text',
            isIcon && 'is-btn__icon',
            splitLeft && 'split-left',
            splitRight && 'split-right'
        ]"
        @click="handleActiveClick"
        ref="buttons"
    >
        <component
            class="btn-icon--left"
            :is="iconLeft"
        />
        <slot />
        <component
            class="btn-icon--right"
            :is="iconRight"
        />
    </button>
</template>

<script setup lang="ts">
import { ButtonSizes, ButtonState } from '@/model/UI/basic/Button';
import { GlobalColors, colors } from '@/GlobalColors.ts';
import { computed, useTemplateRef } from 'vue';
import { handleActive } from '@/plugins/Animation.ts';

interface IPropsType {
    color: GlobalColors;
    btnSize?: ButtonSizes;
    btnState?: ButtonState;
    round?: boolean;
    label?: boolean;
    outline?: boolean;
    btnText?: boolean;
    iconLeft?: any;
    iconRight?: any;
    isIcon?: boolean;
    splitLeft?: boolean;
    splitRight?: boolean;
}

const props = defineProps<IPropsType>();
const btn = useTemplateRef('buttons');

const buttonColor = computed(() => colors[props.color]['700']);
const buttonHoverColor = computed(() => colors[props.color]['600']);

const buttonLabelColor = computed(() => colors[props.color]['400']);
const buttonLabelHoverColor = computed(() => colors[props.color]['500']);

const buttonOutherColor = computed(() => colors[props.color]['300']);

const handleActiveClick = (event: MouseEvent) => {
    if (btn.value) {
        handleActive(event, btn.value);
    }
};
</script>

<style scoped lang="scss">
.btn {
    --btn-color: v-bind(buttonColor);
    --btn-hover-color: v-bind(buttonHoverColor);
    --btn-label-color: v-bind(buttonLabelColor);
    --btn-label-hover-color: v-bind(buttonLabelHoverColor);
    --btn-outline-hover-color: v-bind(buttonOutherColor);

    padding: 8px 18px;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    user-select: none;
    text-transform: capitalize;

    transition: background-color .2s ease,
    color 0.2s ease;
    background-color: var(--btn-color);
    color: var(--color-white);

    .btn-icon--left {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        margin-right: 4px;
    }

    .btn-icon--right {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        margin-left: 4px;
    }

    &:last-child {
        margin-right: 0;
    }

    &.xl {
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 20px;
    }

    &.lg {
        padding: 10px 20px;
        border-radius: 6px;
        font-size: 18px;
    }

    &.sm {
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 14px;
    }

    &.xs {
        padding: 6px 10px;
        border-radius: 2px;
        font-size: 12px;
    }

    &.active {
        background-color: var(--btn-hover-color);
    }

    &.disabled {
        opacity: .6;

        &:hover {
            background-color: var(--btn-color);
        }
    }

    &.round {
        border-radius: 50px;
    }

    &.is-btn__icon {
        padding: 7px;

        svg {
            width: 22px;
            height: 22px;
        }

        .btn-icon--left,
        .btn-icon--right {
            margin: 0;
        }
    }

    &:hover {
        background: var(--btn-hover-color);
    }

    &.label {
        color: var(--btn-color);
        background: var(--btn-label-color);

        &:hover {
            background: var(--btn-label-hover-color);
        }
    }

    &.outline {
        color: var(--btn-color);
        outline: 1px solid var(--btn-color);
        background: none;

        &:hover {
            background: var(--btn-outline-hover-color);
        }
    }

    &.split-left {
        border-radius: 0 6px 6px 0;
        border-left: 1px solid rgba(0, 0, 0, .1);
    }

    &.split-right {
        border-radius: 6px 0 0 6px;
    }

    &.btn-text {
        color: var(--btn-color);
        background: none;

        &:hover {
            background: var(--btn-outline-hover-color);
        }
    }
}
</style>