<template>
    <div class="avatar-group__wrap">
        <small class="slogan">
            Default
        </small>
        <div class="avatars-card__content">
            <div
                class="avatars-card__content-item"
                v-for="item in 4"
                :key="`${item}_${Math.random}`"
            >
                <VAvatar
                    :size="AvatarSizes.DEFAULT"
                    :color="Object.values(GlobalColors)[0]"
                    :rounded="AvatarRounded.CIRCLE"
                    :image="ProfileImg"
                />
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