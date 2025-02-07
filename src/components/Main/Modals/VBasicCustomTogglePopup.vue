<template>
    <div class="modal-wrap__content-item">
        <small class="slogan">
            Toggle Between Modals
        </small>
        <div
            class="modal-content"
        >
            <VPopup :position="ModalType.CENTER">
                <template #modal-btn="{ toggle }">
                    <VButton
                        :color="GlobalColors.PRIMARY"
                        @click="toggle"
                    >
                        Lounch Modal
                    </VButton>
                </template>
                <template #modal-content="{ toggle }">
                    <div v-if="openFirstModal">
                        <div class="modal-head">
                            <h5 class="modal-title">
                                Modal 1
                            </h5>
                            <CloseIcon @click="toggle" />
                        </div>
                        <div class="modal-body">
                            <span class="slogan">Show a second modal and hide this one with the button below.</span>
                        </div>
                        <div class="modal-footer">
                            <VButton
                                :color="GlobalColors.PRIMARY"
                                @click.prevent="toggleOpen"
                            >
                                Open Second Modal
                            </VButton>
                        </div>
                    </div>
                    <div v-else>
                        <div class="modal-head">
                            <h5 class="modal-title">
                                Modal 2
                            </h5>
                            <CloseIcon @click="toggle" />
                        </div>
                        <div class="modal-body">
                            <span class="slogan">Hide this modal and show the first with the button below.</span>
                        </div>
                        <div class="modal-footer">
                            <VButton
                                :color="GlobalColors.PRIMARY"
                                @click.prevent="toggleOpen"
                            >
                                Back To First
                            </VButton>
                        </div>
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
import { ModalType } from '@/model/UI/basic/Modal.ts';
import { ref } from 'vue';

const openFirstModal = ref(true);
const openSecondModal = ref(false);

const toggleOpen = () => {
    openFirstModal.value = !openFirstModal.value;
    openSecondModal.value = !openSecondModal.value;
};
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
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
}
</style>