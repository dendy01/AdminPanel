<template>
    <div class="modal-wrap__content-item">
        <small class="slogan">
            Fullscreen
        </small>
        <div class="modal-content">
            <VPopup fullscreen>
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
                        <p
                            v-for="text in MODALTEXT"
                            :key="text"
                        >
                            {{ text }}
                        </p>
                    </div>
                    <div class="modal-footer">
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
import { MODALTEXT } from '@/model/UI/basic/Modal.ts';
</script>

<style scoped lang="scss">
.modal-wrap__content-item {
    width: 33.33%;

    .modal-content {
        margin-top: var(--padding-xl);
    }
}

.modal-head {
    height: 50px;

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
    overflow-y: auto;
    max-height: calc(100vh - 150px);
    height: 100%;

    p {
        font-size: var(--font-size-lg);
        margin-bottom: var(--margin-lg);

        color: var(--color-gray);
    }
}

.modal-footer {
    margin-top: var(--margin-xxl);

    display: flex;
    justify-content: flex-end;
}
</style>