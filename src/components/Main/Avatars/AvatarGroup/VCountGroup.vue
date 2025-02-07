<template>
    <div class="avatar-group__wrap">
        <small class="slogan">
            Avatar with count
        </small>
        <div class="avatars-card__content">
            <div
                class="avatars-card__content-item"
                v-for="item in 3"
                :key="`${item}_${Math.random}`"
            >
                <VAvatar
                    :size="AvatarSizes.DEFAULT"
                    :color="Object.values(GlobalColors)[0]"
                    :rounded="AvatarRounded.CIRCLE"
                    :image="ProfileImg"
                    :name="'Piter Imax'"
                />
            </div>
            <div class="avatars-card__content-item">
                <VAvatar
                    :size="AvatarSizes.DEFAULT"
                    :color="Object.values(GlobalColors)[1]"
                    :rounded="AvatarRounded.CIRCLE"
                    :name="'+ 3'"
                    label
                />
                <span class="tooltip">3 more</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VAvatar from '@/components/UI/basic/VAvatar.vue';
import { GlobalColors } from '@/GlobalColors.ts';
import { AvatarRounded, AvatarSizes } from '@/model/UI/basic/Avatar.ts';
import ProfileImg from '@/assets/icons/icons-header/profile.png';
</script>

<style scoped lang="scss">
.avatars-card__content-item {
    .tooltip {
        padding: 6px 12px;
        font-size: var(--font-size-sm);
        white-space: nowrap;
        border-radius: var(--border-radius-lg);
        color: var(--color-white);
        background-color: var(--color-bs);

        display: flex;
        align-items: center;
        justify-content: center;

        opacity: 0;
        transition: opacity .2s ease;

        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translate(-50%);
    }

    &:hover {
        top: -5px;
        z-index: 100;

        .tooltip {
            opacity: 1;
            transition: opacity .2s ease;
        }
    }
}
</style>