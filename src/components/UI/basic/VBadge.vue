<template>
    <span
        :class="[
            'badge',
            `badge-${ color }`,
            round && 'round',
            label && 'label',
            `${ size }`,
            circle && 'circle',
            square && 'square',
            dot && 'dot',
            posAbs && 'position-abs',
            position,
            badgeBorder && 'badge-border',
        ]"
    >
        <slot />
    </span>
</template>

<script setup lang="ts">
import { GlobalColors, colors } from '@/GlobalColors.js';
import { computed } from 'vue';
import { BadgeSizes, Positions } from '@/model/UI/basic/Badge.ts';

interface IPropsType {
    color: GlobalColors;
    round?: boolean;
    label?: boolean;
    size: BadgeSizes;
    circle?: boolean;
    square?: boolean;
    dot?: boolean;
    posAbs?: boolean;
    position?: Positions;
    badgeBorder?: boolean;
}

const props = defineProps<IPropsType>();

const badgeColor = computed(() => colors[props.color][700]);
const badgeLabelColor = computed(() => colors[props.color][400]);
</script>

<style scoped>
.badge {
    --badge-color: v-bind(badgeColor);
    --badge-label-color: v-bind(badgeLabelColor);

    padding: 4px 12px;
    font-size: var(--font-size-14);
    border-radius: 4px;
    text-transform: capitalize;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    background-color: var(--badge-color);
    color: var(--color-white);

    &:last-child {
        margin-right: 0;
    }

    &.badge-border {
        border: 1px solid var(--badge-color);
    }

    &.position-abs {
        position: absolute;

        &.top-left {
            top: -12px;
            left: -12px;
        }

        &.top-right {
            top: -12px;
            right: -12px;
        }

        &.bottom-left {
            bottom: -12px;
            left: -12px;
        }

        &.bottom-right {
            bottom: -12px;
            right: -12px;
        }
    }

    &.round {
        border-radius: 50px;
    }

    &.label {
        color: var(--badge-color);
        background-color: var(--badge-label-color);
    }

    &.circle {
        border-radius: 50%;
    }

    &.circle, &.square {
        width: 24px;
        height: 24px;
        padding: 3px;
        line-height: 1.5px;

        .icon {
            width: 12px;
            height: 12px;
        }
    }

    &.dot {
        width: 8px;
        height: 8px;
    }

    &.xl {
        &.dot {
            width: 24px;
            height: 24px;

            &.top-left {
                top: -12px;
                left: -12px;
            }

            &.top-right {
                top: -12px;
                right: -12px;
            }

            &.bottom-left {
                bottom: -12px;
                left: -12px;
            }

            &.bottom-right {
                bottom: 0;
                right: 0;
            }
        }
    }

    &.lg {
        &.dot {
            width: 16px;
            height: 16px;

            &.top-left {
                top: -8px;
                left: -8px;
            }

            &.top-right {
                top: -8px;
                right: -8px;
            }

            &.bottom-left {
                bottom: -8px;
                left: -8px;
            }

            &.bottom-right {
                bottom: -8px;
                right: -8px;
            }
        }
    }

    &.sm {
        &.dot {
            width: 12px;
            height: 12px;

            &.top-left {
                top: -6px;
                left: -6px;
            }

            &.top-right {
                top: -6px;
                right: -6px;
            }

            &.bottom-left {
                bottom: -6px;
                left: -6px;
            }

            &.bottom-right {
                bottom: -6px;
                right: -6px;
            }
        }
    }

    &.xs {
        &.dot {
            width: 8px;
            height: 8px;

            &.top-left {
                top: -4px;
                left: -4px;
            }

            &.top-right {
                top: -4px;
                right: -4px;
            }

            &.bottom-left {
                bottom: -4px;
                left: -4px;
            }

            &.bottom-right {
                bottom: -4px;
                right: -4px;
            }
        }
    }
}
</style>