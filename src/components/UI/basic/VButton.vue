<template>
    <button
        :class="[
            'btn',
            `btn-${ btnType }`,
            btnSize,
            btnState,
            round && 'round',
            label && 'label',
            outline && 'outline',
            btnText && 'btn-text',
            isIcon && 'is-btn__icon'
        ]"
    >
        <component
            class="btn-icon"
            :is="icon"
        />
        <slot />
    </button>
</template>

<script setup lang="ts">
import { ButtonSizes, ButtonState, ButtonTypesIcons } from '@/model/UI/basic/Button';
import { GlobalColors, useColors } from '@/store/useColors';
import { computed } from 'vue';

interface IPropsType {
    btnType: GlobalColors | ButtonTypesIcons;
    btnSize?: ButtonSizes;
    btnState?: ButtonState;
    round?: boolean;
    label?: boolean;
    outline?: boolean;
    btnText?: boolean;
    icon?: any;
    isIcon?: boolean;
}

const props = defineProps<IPropsType>();
const colors = useColors();

const buttonColor = computed(() => colors.color[props.btnType]['700']);
const buttonHoverColor = computed(() => colors.color[props.btnType]['600']);

const buttonLabelColor = computed(() => colors.color[props.btnType]['400']);
const buttonLabelHoverColor = computed(() => colors.color[props.btnType]['500']);

const buttonOutherColor = computed(() => colors.color[props.btnType]['300']);
</script>

<style scoped lang="scss">
.btn {
    --btn-color: v-bind(buttonColor);
    --btn-hover-color: v-bind(buttonHoverColor);
    --btn-label-color: v-bind(buttonLabelColor);
    --btn-label-hover-color: v-bind(buttonLabelHoverColor);
    --btn-outline-hover-color: v-bind(buttonOutherColor);


    margin: 16px 6px 0 0;
    padding: 8px 18px;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    transition: background-color .2s ease,
        color 0.2s ease;
    background-color: var(--btn-color);
    color: var(--color-white);

    .btn-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        margin-right: 4px;
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

        .btn-icon {
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

    &.btn-text {
        color: var(--btn-color);
        background: none;

        &:hover {
            background: var(--btn-outline-hover-color);
        }
    }
}
</style>