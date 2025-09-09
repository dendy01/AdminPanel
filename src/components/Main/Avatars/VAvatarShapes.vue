<template>
    <div class="avatars-card">
        <h2 class="title">
            Shapes
        </h2>
        <div class="avatars-card__content">
            <VAvatar
                v-for="round in rounds"
                :key="`${round}_${Math.random}`"
                :size="AvatarSizes.DEFAULT"
                :color="Object.values(GlobalColors)[0]"
                :rounded="round"
                :image="ProfileImg"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import VAvatar from '@/components/UI/basic/VAvatar.vue';
import { GlobalColors } from '@/GlobalColors.ts';
import { AvatarRounded, AvatarSizes } from '@/model/UI/basic/Avatar.ts';
import ProfileImg from '@/assets/icons/icons-header/profile.png';

const rounds = [AvatarRounded.CIRCLE, AvatarRounded.ROUND, undefined];
</script>