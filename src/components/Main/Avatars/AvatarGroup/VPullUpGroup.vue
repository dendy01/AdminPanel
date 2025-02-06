<template>
    <div class="avatar-group__wrap">
        <small class="slogan">
            Pull Up
        </small>
        <div class="avatars-card__content">
            <div class="avatars-card__content-item">
                <VAvatar
                    :size="AvatarSizes.DEFAULT"
                    :color="Object.values(GlobalColors)[0]"
                    :rounded="AvatarRounded.CIRCLE"
                >
                    <template #avatar>
                        <img
                            src="@/assets/icons/icons-header/profile.png"
                            alt="profile"
                        >
                    </template>
                </VAvatar>
            </div>
            <div class="avatars-card__content-item">
                <VAvatar
                    :size="AvatarSizes.DEFAULT"
                    :color="Object.values(GlobalColors)[0]"
                    :rounded="AvatarRounded.CIRCLE"
                >
                    <template #avatar>
                        <img
                            src="@/assets/icons/icons-header/profile.png"
                            alt="profile"
                        >
                    </template>
                </VAvatar>
            </div>
            <div class="avatars-card__content-item">
                <VAvatar
                    :size="AvatarSizes.DEFAULT"
                    :color="Object.values(GlobalColors)[0]"
                    :rounded="AvatarRounded.CIRCLE"
                >
                    <template #avatar>
                        <img
                            src="@/assets/icons/icons-header/profile.png"
                            alt="profile"
                        >
                    </template>
                </VAvatar>
            </div>
            <div class="avatars-card__content-item">
                <VAvatar
                    :size="AvatarSizes.DEFAULT"
                    :color="Object.values(GlobalColors)[0]"
                    :rounded="AvatarRounded.CIRCLE"
                >
                    <template #avatar>
                        <img
                            src="@/assets/icons/icons-header/profile.png"
                            alt="profile"
                        >
                    </template>
                </VAvatar>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VAvatar from '@/components/UI/basic/VAvatar.vue';
import { GlobalColors } from '@/GlobalColors.ts';
import { AvatarRounded, AvatarSizes } from '@/model/UI/basic/Avatar.ts';
</script>

<style scoped lang="scss">
.avatar-group__wrap {
    width: 33.33%;
    padding: 0 var(--padding-xxl) var(--padding-xxl) var(--padding-xxl);

    .avatars-card__content {
        margin-top: var(--margin-xl);

        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .avatars-card__content-item {
            border-radius: 50%;
            position: relative;


            border: 2px solid var(--color-white);
            transition: top 2s ease;

            &:nth-child(1){
                left: 0;
                z-index: 8;
            }

            &:nth-child(2){
                left: -10px;
                z-index: 7;
            }

            &:nth-child(3){
                left: -20px;
                z-index: 6;
            }

            &:nth-child(4){
                left: -30px;
                z-index: 5;
            }

            &:hover {
                top: -5px;
                z-index: 100;
            }
        }
    }
}
</style>