<template>
    <div class="card">
        <VAvatarSizes />
        <VAvatarInitials />
    </div>
    <div class="card">
        <VAvatarLabelInitials />
        <VAvatarShapes />
    </div>
    <div class="card">
        <VAvatarStatusIndicator />
        <VAvatarLabelStatusIndicator />
    </div>
    <div class="card">
        <VAvatarGroup />
    </div>
</template>

<script setup lang="ts">
import VAvatarSizes from '@/components/Main/Avatars/VAvatarSizes.vue';
import VAvatarInitials from '@/components/Main/Avatars/VAvatarInitials.vue';
import VAvatarLabelInitials from '@/components/Main/Avatars/VAvatarLabelInitials.vue';
import VAvatarShapes from '@/components/Main/Avatars/VAvatarShapes.vue';
import VAvatarStatusIndicator from '@/components/Main/Avatars/VAvatarStatusIndicator.vue';
import VAvatarLabelStatusIndicator from '@/components/Main/Avatars/VAvatarLabelStatusIndicator.vue';
import VAvatarGroup from '@/components/Main/Avatars/AvatarGroup/VAvatarGroup.vue';
</script>

<style scoped lang="scss">
.card {
    margin-top: 30px;

    display: flex;
    gap: 30px;
}
</style>