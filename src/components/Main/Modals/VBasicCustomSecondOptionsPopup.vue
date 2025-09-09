<template>
    <VPopup>
        <template #modal-btn="{ toggle }">
            <VButton
                :color="GlobalColors.PRIMARY"
                @click="toggle"
            >
                Option 2
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
                <p
                    v-for="text in MODALTEXT"
                    :key="text"
                >
                    {{ text }}
                </p>
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
</template>

<script setup lang="ts">
import { GlobalColors } from '@/GlobalColors.ts';
import VButton from '@/components/UI/basic/VButton.vue';
import VPopup from '@/components/UI/basic/VPopup.vue';
import CloseIcon from '@/assets/icons/icons-header/close.svg';
import { MODALTEXT } from '@/model/UI/basic/Modal.ts';
</script>

<style scoped lang="scss">
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
    margin: var(--margin-xl) 0;
    overflow-y: auto;
    max-height: calc(100vh - 250px);
    height: 100%;

    p {
        font-size: var(--font-size-lg);
        margin-bottom: var(--margin-lg);

        color: var(--color-gray);
    }
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
</style>