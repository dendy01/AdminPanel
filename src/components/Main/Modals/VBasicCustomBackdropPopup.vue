<template>
    <div class="modal-wrap__content-item">
        <small class="slogan">
            Backdrop
        </small>
        <div class="modal-content">
            <VPopup backdrop>
                <template #modal-btn="{ toggle }">
                    <VButton
                        :color="GlobalColors.PRIMARY"
                        @click="toggle"
                    >
                        Lounch Modal
                    </VButton>
                </template>
                <template #modal-content="{ toggle }">
                    <div class="modal-head">
                        <h5 class="modal-title">
                            Modal title
                        </h5>
                        <CloseIcon @click="toggle" />
                    </div>
                    <div class="modal-body">
                        <div class="content">
                            <input
                                type="text"
                                placeholder="Name"
                            >
                        </div>
                        <div class="content">
                            <input
                                type="email"
                                placeholder="Email"
                            >
                            <input type="date">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <VButton
                            :color="GlobalColors.DARK"
                            @click="toggle"
                            outline
                        >
                            Close
                        </VButton>
                        <VButton
                            :color="GlobalColors.PRIMARY"
                        >
                            Save Changes
                        </VButton>
                    </div>
                </template>
            </VPopup>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GlobalColors } from '@/GlobalColors.ts';
import VButton from '@/components/UI/basic/VButton.vue';
import VPopup from '@/components/UI/basic/VPopup.vue';
import CloseIcon from '@/assets/icons/icons-header/close.svg';
</script>

<style scoped lang="scss">
.modal-wrap__content-item {
    width: 33.33%;

    .modal-content {
        margin-top: var(--padding-xl);
    }
}

.modal-head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--color-text);

    .modal-title {
        font-size: var(--font-size-xxl);
        font-weight: 500;
    }

    svg {
        width: 20px;
        height: 20px;
    }
}

.modal-body {
    padding: var(--padding-xl) 0;

    input {
        margin: 4px 0;
        padding: var(--padding-lg) var(--padding-xl);
        border-radius: var(--border-radius-lg);
        border: 1px solid #d1cfd4;
        background-color: var(--bg-card);

        font-size: var(--font-size-xl);
    }

    .content {
        display: flex;
        gap: 16px;
    }

    .content:first-of-type {
        padding-bottom: var(--padding-xl);
    }
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
</style>