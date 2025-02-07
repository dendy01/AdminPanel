<template>
    <div>
        <slot
            name="modal-btn"
            :toggle="toggleOpen"
        />
    </div>
    <teleport to="body">
        <div
            class="modal-overlay"
            v-if="isOpen"
        >
            <div
                class="modal"
                :class="[
                    position,
                    size,
                    fullscreen && 'fullscreen'
                ]"
                ref="modalRef"
            >
                <slot
                    name="modal-content"
                    :toggle="toggleOpen"
                />
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import { ModalSizes, ModalType } from '@/model/UI/basic/Modal.ts';

interface IPropsType {
    position?: ModalType;
    size?: ModalSizes;
    fullscreen?: boolean;
    backdrop?: boolean;
}

const props = defineProps<IPropsType>();

const isOpen = ref<boolean>(false);
const modalRef = useTemplateRef('modalRef');

const toggleOpen = () => {
    isOpen.value = !isOpen.value;
};

const modalClose = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.className === 'modal-overlay' || target.className === 'close-icon') {
        window.removeEventListener('click', modalClose);
        modalRef.value?.classList.add('modal-close');

        setTimeout(() => {
            modalRef.value?.classList.remove('modal-close');
            window.addEventListener('click', modalClose);

            if (props.backdrop) {
                return;
            }

            isOpen.value = false;
        }, 1000);
    }
};

onMounted(() => {
    window.addEventListener('click', modalClose);
});

onUnmounted(() => {
    window.removeEventListener('click', modalClose);
});
</script>

<style scoped lang="scss">
.modal-overlay {
    width: 100%;
    height: 100vh;
    overflow-y: auto;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;

    background-color: rgba(0, 0, 0, 0.2);

    .modal {
        width: 40vw;
        padding: var(--padding-xxl);
        margin-bottom: 100px;
        border-radius: var(--border-radius-xl);

        top: 50px;
        left: 50%;
        position: relative;
        transform: translateX(-50%);
        animation: modalOpen 1s ease;
        z-index: 1100;

        background-color: var(--bg-card);
        box-shadow: var(--shadow);

        $sizes: (
            'small': 30vw,
            'medium': 40vw,
            'large': 50vw,
        );

        &.modal-close {
            &.center {
                animation: modalCloseCenter 1s ease;
            }

            &:not(.center) {
                animation: modalClose 1s ease;
            }
        }

        &.top {
            border-radius: 0 0 var(--border-radius-xl) var(--border-radius-xl);

            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        &.center {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &.fullscreen {
            width: 100%;
            height: 100%;
            border-radius: 0;
            margin-bottom: 0;

            top: 0;
        }

        @each $size, $value in $sizes {
            &.#{ $size } {
                width: $value;
            }
        }
    }
}

@keyframes modalOpen {
    0% {
        transform: translateX(-50%) scale(0);
    }
    100% {
        transform: translateX(-50%) scale(1);
    }
}

@keyframes modalClose {
    0% {
        transform: translateX(-50%) scale(1);
    }
    50% {
        transform: translateX(-50%) scale(1.1);
    }
    100% {
        transform: translateX(-50%) scale(1);
    }
}

@keyframes modalCloseCenter {
    0% {
        transform: translate(-50%, -50%) scale(1);
    }
    50% {
        transform: translate(-50%, -50%) scale(1.1);
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
    }
}
</style>