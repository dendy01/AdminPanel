<template>
    <div class="modal-wrap__content">
        <VBasicCustomVideoModal />
        <VBasicCustomToggleModal />
        <VBasicCustomFullscreenModal />
    </div>
</template>

<script setup lang="ts">
import VBasicCustomVideoModal from '@/components/Main/Modals/VBasicCustomVideoPopup.vue';
import VBasicCustomToggleModal from '@/components/Main/Modals/VBasicCustomTogglePopup.vue';
import VBasicCustomFullscreenModal from '@/components/Main/Modals/VBasicCustomFullscreenPopup.vue';
</script>

<style scoped lang="scss">
.modal-wrap__content {
    padding: var(--padding-xxl);

    display: flex;
    justify-content: space-between;
}
</style>