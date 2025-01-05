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
        @click="handleActive"
        ref="buttons"
    >
        <component
            class="btn-icon"
            :is="icon"
        />
        <slot />
        <span
            class="wave"
            v-if="showWave"
            :style="waveStyle"
        />
    </button>
</template>

<script setup lang="ts">
import { ButtonSizes, ButtonState } from '@/model/UI/basic/Button';
import { GlobalColors, getColors } from '@/model/GlobalColors.ts';
import { ref, computed, useTemplateRef } from 'vue';

interface IPropsType {
    btnType: GlobalColors;
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
const colors = getColors();
const btn = useTemplateRef('buttons');
const showWave = ref(false);
const waveStyle = ref({});

const buttonColor = computed(() => colors[props.btnType]['700']);
const buttonHoverColor = computed(() => colors[props.btnType]['600']);

const buttonLabelColor = computed(() => colors[props.btnType]['400']);
const buttonLabelHoverColor = computed(() => colors[props.btnType]['500']);

const buttonOutherColor = computed(() => colors[props.btnType]['300']);

const handleActive = (event: MouseEvent) => {
    if (btn.value) {
        const rect = btn.value.getBoundingClientRect();
        const size: number = Math.max(rect.width, rect.height);
        const x: number = event.clientX - rect.left - size / 2;
        const y: number = event.clientY - rect.top - size / 2;

        waveStyle.value = {
            top: `${y}px`,
            left: `${x}px`,
            width: `${size}px`,
            height: `${size}px`
        };

        showWave.value = true;

        setTimeout(() => {
            showWave.value = false;
        }, 200);
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


    margin: 16px 6px 0 0;
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

.wave {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255);
    animation: wave-animation 0.3s linear;
    pointer-events: none;
}

@keyframes wave-animation {
    0% {
        transform: scale(.5);
        opacity: .8;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}
</style>