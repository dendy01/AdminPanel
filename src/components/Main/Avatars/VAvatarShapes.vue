<template>
    <div class="avatars-card">
        <h2 class="title">
            Shapes
        </h2>
        <div class="avatars-card__content">
            <VAvatar
                :size="AvatarSizes.DEFAULT"
                :color="Object.values(GlobalColors)[0]"
                :rounded="AvatarRounded.CIRCLE"
                :image="ProfileImg"
            />
            <VAvatar
                :size="AvatarSizes.DEFAULT"
                :color="Object.values(GlobalColors)[0]"
                :rounded="AvatarRounded.ROUND"
                :image="ProfileImg"
            />
            <VAvatar
                :size="AvatarSizes.DEFAULT"
                :color="Object.values(GlobalColors)[0]"
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
</script>