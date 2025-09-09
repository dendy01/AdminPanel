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
                :image="ProfileImg"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import VAvatar from '@/components/UI/basic/VAvatar.vue';
import { AvatarRounded, AvatarSizes } from '@/model/UI/basic/Avatar.js';
import { GlobalColors } from '@/GlobalColors.ts';
import ProfileImg from '@/assets/icons/icons-header/profile.png';
</script>