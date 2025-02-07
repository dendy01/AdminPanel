<template>
    <div class="modal-wrap">
        <h5 class="title">
            Basic Modals
        </h5>
        <VBasicDefaultPopup />
        <hr class="line">
        <VBasicDefaultCustomPopup />
        <hr class="line">
        <div class="modal-wrap__content">
            <VBasicCustomSizesPopup />
            <VBasicDemoOptionsPopup />
            <VBasicCustomBackdropPopup />
        </div>
    </div>
</template>

<script setup lang="ts">
import VBasicDefaultPopup from '@/components/Main/Modals/VBasicDefaultPopup.vue';
import VBasicDefaultCustomPopup from '@/components/Main/Modals/VBasicDefaultCustomPopup.vue';
import VBasicCustomSizesPopup from '@/components/Main/Modals/VBasicCustomSizesPopup.vue';
import VBasicDemoOptionsPopup from '@/components/Main/Modals/VBasicDemoOptionsPopup.vue';
import VBasicCustomBackdropPopup from '@/components/Main/Modals/VBasicCustomBackdropPopup.vue';
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