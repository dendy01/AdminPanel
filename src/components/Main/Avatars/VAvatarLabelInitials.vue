<template>
    <div class="avatars-card">
        <h2 class="title">
            Label Initials
        </h2>
        <div class="avatars-card__content">
            <VAvatar
                v-for="(size, index) in Object.values(AvatarSizes)"
                :key="size"
                :size="size"
                :color="Object.values(GlobalColors)[index]"
                :rounded="AvatarRounded.CIRCLE"
                :name="'Piter Imax'"
                label
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import VAvatar from '@/components/UI/basic/VAvatar.vue';
import { GlobalColors } from '@/GlobalColors.ts';
import { AvatarRounded, AvatarSizes } from '@/model/UI/basic/Avatar.ts';
</script>