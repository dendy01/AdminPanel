<template>
    <div class="modal-wrap__content-item">
        <small class="slogan">
            Scrolling long content
        </small>
        <div class="modal-content">
            <VBasicCustomFirstOptionsModal />
            <VBasicCustomSecondOptionsModal />
        </div>
    </div>
</template>

<script setup lang="ts">
import VBasicCustomFirstOptionsModal from '@/components/Main/Modals/VBasicCustomFirstOptionsPopup.vue';
import VBasicCustomSecondOptionsModal from '@/components/Main/Modals/VBasicCustomSecondOptionsPopup.vue';
</script>

<style scoped lang="scss">
.modal-wrap__content-item {
    width: 33.33%;

    .modal-content {
        margin-top: var(--padding-xl);

        display: flex;
        gap: 10px;
    }
}
</style>