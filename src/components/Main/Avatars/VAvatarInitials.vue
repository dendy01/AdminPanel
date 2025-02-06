<template>
    <div class="avatars-card">
        <h2 class="title">
            Initials
        </h2>
        <div class="avatars-card__content">
            <VAvatar
                v-for="(size, index) in Object.values(AvatarSizes)"
                :key="size"
                :size="size"
                :color="Object.values(GlobalColors)[index]"
                :rounded="AvatarRounded.CIRCLE"
            >
                <template #avatar>
                    <span>{{ AvatarName.name[0] + AvatarName.lastName[0] }}</span>
                </template>
            </VAvatar>
        </div>
    </div>
</template>

<script setup lang="ts">
import VAvatar from '@/components/UI/basic/VAvatar.vue';
import { GlobalColors } from '@/GlobalColors.ts';
import { AvatarName, AvatarRounded, AvatarSizes } from '@/model/UI/basic/Avatar.ts';
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