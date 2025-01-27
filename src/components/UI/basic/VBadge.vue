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

<style scoped lang="scss">
.badge {
    --badge-color: v-bind(badgeColor);
    --badge-label-color: v-bind(badgeLabelColor);
    $positions: (
        'top-left': (top, left),
        'top-right': (top, right),
        'bottom-left': (bottom, left),
        'bottom-right': (bottom, right)
    );
    $sizes: (
        'xl': 24px,
        'lg': 16px,
        'sm': 12px,
        'xs': 8px
    );

    padding: 4px 12px;
    font-size: var(--font-size-md);
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

        @each $position, $coords in $positions {
            &.#{ $position } {
                #{ nth($coords, 1) }: -12px;
                #{ nth($coords, 2) }: -12px;
            }
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

    @each $size, $value in $sizes {
        &.#{ $size } {
            &.dot {
                width: $value;
                height: $value;

                $offset: $value / 2;

                @each $position, $coords in $positions {
                    &.#{ $position } {
                        #{ nth($coords, 1) }: -$offset;
                        #{ nth($coords, 2) }: -$offset;
                    }
                }
            }
        }
    }
}
</style>