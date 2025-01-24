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
        <div class="wave-container" />
        <span class="btn-content__wrap">
            <component
                class="btn-icon--left"
                :is="iconLeft"
            />
            <slot />
            <component
                class="btn-icon--right"
                :is="iconRight"
            />
        </span>
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
@import '@/style/variables.scss';

.btn {
    --btn-color: v-bind(buttonColor);
    --btn-hover-color: v-bind(buttonHoverColor);
    --btn-label-color: v-bind(buttonLabelColor);
    --btn-label-hover-color: v-bind(buttonLabelHoverColor);
    --btn-outline-hover-color: v-bind(buttonOutherColor);

    padding: var(--padding-8) 18px;
    font-size: var(--font-size-16);
    border-radius: var(--border-radius-6);
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: visible;
    user-select: none;
    text-transform: capitalize;

    transition: background-color var(--duration) var(--timing-function);
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
        padding: var(--padding-12) var(--padding-24);
        border-radius: var(--border-radius-8);
        font-size: var(--font-size-20);
    }

    &.lg {
        padding: 10px var(--padding-20);
        border-radius: var(--border-radius-6);
        font-size: var(--font-size-18);
    }

    &.sm {
        padding: var(--padding-8) var(--padding-12);
        border-radius: var(--border-radius-4);
        font-size: var(--font-size-14);
    }

    &.xs {
        padding: 6px 10px;
        border-radius: var(--border-radius-2);
        font-size: var(--font-size-12);
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
        padding: var(--padding-8);

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
        background-color: var(--btn-hover-color);
    }

    &.label {
        color: var(--btn-color);
        background-color: var(--btn-label-color);

        &:hover {
            background-color: var(--btn-label-hover-color);
        }
    }

    &.outline {
        color: var(--btn-color);
        outline: 1px solid var(--btn-color);
        background: none;

        &:hover {
            background-color: var(--btn-outline-hover-color);
        }
    }

    &.split-left {
        border-radius: 0 var(--border-radius-6) var(--border-radius-6) 0;
        border-left: 1px solid rgba(0, 0, 0, .1);
    }

    &.split-right {
        border-radius: var(--border-radius-6) 0 0 var(--border-radius-6);
    }

    &.btn-text {
        color: var(--btn-color);
        background: none;

        &:hover {
            background-color: var(--btn-outline-hover-color);
        }
    }

    .wave-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: inherit;
    }

    .btn-content__wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
}
</style>