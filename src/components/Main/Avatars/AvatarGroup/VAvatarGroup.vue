<template>
    <div class="avatar-group">
        <h2 class="title">
            Avatar Group
        </h2>
        <div class="avatar-group__content">
            <VDefaultGroup />
            <VPullUpGroup />
        </div>
    </div>
</template>

<script setup lang="ts">
import VDefaultGroup from '@/components/Main/Avatars/AvatarGroup/VDefaultGroup.vue';
import VPullUpGroup from '@/components/Main/Avatars/AvatarGroup/VPullUpGroup.vue';
</script>

<style>
.avatar-group {
    width: 100%;
    border-radius: var(--border-radius-xl);

    background-color: var(--bg-card);
    box-shadow: var(--shadow);

    .avatar-group__content {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>