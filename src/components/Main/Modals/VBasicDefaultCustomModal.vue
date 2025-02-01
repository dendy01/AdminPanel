<template>
    <div class="modal-wrap__content">
        <VBasicCustomVideoModal />
        <VBasicCustomToggleModal />
        <VBasicCustomFullscreenModal />
    </div>
</template>

<script setup lang="ts">
import VBasicCustomVideoModal from '@/components/Main/Modals/VBasicCustomVideoModal.vue';
import VBasicCustomToggleModal from '@/components/Main/Modals/VBasicCustomToggleModal.vue';
import VBasicCustomFullscreenModal from '@/components/Main/Modals/VBasicCustomFullscreenModal.vue';
</script>

<style scoped lang="scss">
.modal-wrap__content {
    padding: var(--padding-xxl);

    display: flex;
    justify-content: space-between;
}
</style>