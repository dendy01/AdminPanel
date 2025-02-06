<template>
    <div class="avatars-card">
        <h2 class="title">
            Status Indicator
        </h2>
        <div class="avatars-card__content">
            <VAvatar
                v-for="variant in Object.values(GlobalColors)"
                :key="variant"
                :size="AvatarSizes.DEFAULT"
                :color="variant"
                :rounded="AvatarRounded.CIRCLE"
            >
                <template #avatar>
                    <img
                        src="@/assets/icons/icons-header/profile.png"
                        alt="profile"
                    >
                </template>
                <template #avatar-status>
                    <VBadge
                        :color="variant"
                        dot
                        circle
                        pos-abs
                        :size="BadgeSizes.XS"
                        :position="Positions.BOTTOM_RIGHT"
                    />
                </template>
            </VAvatar>
        </div>
    </div>
</template>

<script setup lang="ts">
import VAvatar from '@/components/UI/basic/VAvatar.vue';
import { GlobalColors } from '@/GlobalColors.ts';
import { AvatarRounded, AvatarSizes } from '@/model/UI/basic/Avatar.ts';
import VBadge from '@/components/UI/basic/VBadge.vue';
import { BadgeSizes, Positions } from '@/model/UI/basic/Badge.ts';
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