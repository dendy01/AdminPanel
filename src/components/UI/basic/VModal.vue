<template>
    <slot
        name="modal-btn"
        :toggle="toggleOpen"
    />
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
        >
            <slot
                name="modal-content"
                :toggle="toggleOpen"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { ModalSizes, ModalType } from '@/model/UI/basic/Modal.ts';

interface IPropsType {
    position?: ModalType;
    size?: ModalSizes;
    fullscreen?: boolean;
    backdrop?: boolean;
}

const props = defineProps<IPropsType>();

const isOpen = ref<boolean>(false);

const toggleOpen = () => {
    isOpen.value = !isOpen.value;
};

const modalOpen = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.className === 'modal-overlay' || target.className === 'close-icon') {
        isOpen.value = false;
    }
};

onMounted(() => {
    if (props.backdrop) {
        return;
    } else {
        window.addEventListener('click', modalOpen);
    }
});

onUnmounted(() => {
    window.removeEventListener('click', modalOpen);
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
        width: 500px;
        padding: var(--padding-xxl);
        border-radius: var(--border-radius-xl);

        top: 50px;
        left: 50%;
        position: relative;
        transform: translateX(-50%);
        z-index: 1100;

        background-color: var(--bg-card);
        box-shadow: var(--shadow);

        $sizes: (
            'small': 20%,
            'medium': 40%,
            'large': 60%,
        );

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

            top: 0;
        }

        @each $size, $value in $sizes {
            &.#{ $size } {
                width: $value;
            }
        }
    }
}
</style>