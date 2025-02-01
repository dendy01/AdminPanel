<template>
    <div class="modal-wrap">
        <h5 class="title">
            Basic Modals
        </h5>
        <VBasicDefaultModals />
        <hr class="line">
        <VBasicDefaultCustomModal />
        <hr class="line">
        <div class="modal-wrap__content">
            <VBasicCustomSizesModal />
            <VBasicDemoOptionsModal />
            <VBasicCustomBackdropModal />
        </div>
    </div>
</template>

<script setup lang="ts">
import VBasicDefaultModals from '@/components/Main/Modals/VBasicDefaultModals.vue';
import VBasicDefaultCustomModal from '@/components/Main/Modals/VBasicDefaultCustomModal.vue';
import VBasicCustomSizesModal from '@/components/Main/Modals/VBasicCustomSizesModal.vue';
import VBasicDemoOptionsModal from '@/components/Main/Modals/VBasicDemoOptionsModal.vue';
import VBasicCustomBackdropModal from '@/components/Main/Modals/VBasicCustomBackdropModal.vue';
</script>

<style scoped lang="scss">
.modal-wrap {
    margin-top: var(--margin-xxxl);
    background-color: var(--bg-card);
    border-radius: var(--border-radius-lg);
    box-shadow: 0 2px 8px var(--color-bs);

    .modal-wrap__content {
        padding: var(--padding-xxl);

        display: flex;
    }
}
</style>