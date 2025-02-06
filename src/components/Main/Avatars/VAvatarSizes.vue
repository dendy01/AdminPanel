<template>
    <div class="avatars-card">
        <h2 class="title">
            Sizes
        </h2>
        <div class="avatars-card__content">
            <VAvatar
                v-for="size in Object.values(AvatarSizes)"
                :key="size"
                :size="size"
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
</template>

<script setup lang="ts">
import VAvatar from '@/components/UI/basic/VAvatar.vue';
import { AvatarRounded, AvatarSizes } from '@/model/UI/basic/Avatar.js';
import { GlobalColors } from '@/GlobalColors.ts';
</script>

<style scoped lang="scss">
.avatars-card {
    width: 50%;
    border-radius: var(--border-radius-xl);

    background-color: var(--bg-card);
    box-shadow: var(--shadow);

    .avatars-card__content {
        padding: 0 var(--padding-xxl) var(--padding-xxl) var(--padding-xxl);

        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    }
}
</style>