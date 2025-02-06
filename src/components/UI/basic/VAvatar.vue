<template>
    <div class="avatar-wrap">
        <div
            :class="[
                'avatar',
                size,
                color,
                rounded,
                label && 'label'
            ]"
        >
            <slot name="avatar" />
        </div>
        <div class="avatar-status">
            <slot name="avatar-status" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { AvatarRounded, AvatarSizes } from '@/model/UI/basic/Avatar.ts';
import { computed } from 'vue';
import { colors, GlobalColors } from '@/GlobalColors.ts';

interface IPropsType {
    size: AvatarSizes;
    color: GlobalColors;
    rounded?: AvatarRounded;
    label?: boolean;
}

const props = defineProps<IPropsType>();

const avatarColor = computed(() => colors[props.color]['700']);
const avatarLabelColor = computed(() => colors[props.color]['400']);
</script>

<style scoped lang="scss">
.avatar-wrap {
    position: relative;
}

.avatar {
    --avatar-color: v-bind(avatarColor);
    --avatar-label-color: v-bind(avatarLabelColor);

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    background-color: var(--avatar-color);
    color: var(--color-white);

    $sizes: (
        'xs': (24px, 10px),
        'sm': (32px, 12px),
        'default': (40px, 15px),
        'md': (48px, 18px),
        'lg': (56px, 24px),
        'xl': (64px, 30px)
    );

    &.round {
        border-radius: var(--border-radius-lg);
    }

    &.circle {
        border-radius: 50%;

        +.avatar-status {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            width: 70%;
            height: 70%;
        }
    }

    &.label {
        color: var(--avatar-color);
        background-color: var(--avatar-label-color);
    }

    @each $size, $value in $sizes {
        &.#{$size} {
            width: nth($value, 1);
            height: nth($value, 1);
            font-size: nth($value, 2);
        }
    }
}
</style>