<template>
    <div
        class="dropdown-wrapper"
        ref="dropdownRef"
    >
        <div
            v-if="split"
            class="dropdown-btn__split"
        >
            <slot name="dropdownLeft" />
            <slot
                name="dropdownRight"
                :toggle="toggleOpen"
            />
        </div>

        <slot
            name="dropdown"
            :toggle="toggleOpen"
        />

        <div
            v-show="isOpen"
            ref="menuRef"
            class="dropdown-menu"
            :class="[
                currentPosition,
                left && 'left',
                right && 'right'
            ]"
        >
            <slot name="menu" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { Positions } from '@/model/UI/basic/Dropdown.ts';

interface IPropsType {
    split?: boolean;
    position: Positions;
    left?: boolean;
    right?: boolean;
}

const props = withDefaults(defineProps<IPropsType>(), {
    position: Positions.TOP_LEFT
});

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const menuRef = ref<HTMLElement | null>(null);
const currentPosition = ref(props.position);

const eventActive = (event: any) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        isOpen.value = false;
    }
};

const toggleOpen = async () => {
    isOpen.value = !isOpen.value;

    if (isOpen.value) {
        await nextTick();
        changePosition();
    }
};

const changePosition = () => {
    if (menuRef.value) {
        const menuRect = menuRef.value.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (menuRect.top < 0 && currentPosition.value) {
            if (currentPosition.value === Positions.TOP_LEFT) {
                currentPosition.value = Positions.BOTTOM_LEFT;
            }
            if (currentPosition.value === Positions.TOP_RIGHT) {
                currentPosition.value = Positions.BOTTOM_RIGHT;
            }
        }

        const bottomSpace = windowHeight - menuRect.bottom;
        if (bottomSpace < 0 && currentPosition.value) {
            if (currentPosition.value === Positions.BOTTOM_LEFT) {
                currentPosition.value = Positions.TOP_LEFT;
            }
            if (currentPosition.value === Positions.BOTTOM_RIGHT) {
                currentPosition.value = Positions.TOP_RIGHT;
            }
        }
    }
};

watch(isOpen, (newValue) => {
    if (newValue) {
        window.addEventListener('scroll', changePosition, true);
    } else {
        window.removeEventListener('scroll', changePosition, true);
    }
});

onMounted(() => {
    document.body.addEventListener('click', eventActive);
});

onUnmounted(() => {
    document.body.removeEventListener('click', eventActive);
    window.removeEventListener('scroll', changePosition, true);
});
</script>

<style scoped>
.dropdown-wrapper {
    --offset: 4px;

    position: relative;

    .dropdown-btn__split {
        display: flex;
    }

    .dropdown-menu {
        padding: var(--padding-md) 0;
        border-radius: var(--border-radius-xl);

        position: absolute;
        z-index: 999;

        background-color: var(--bg-card);
        box-shadow: 0 2px 4px var(--color-bs);

        &.top-left {
            left: 0;
            bottom: calc(100% + var(--offset));
        }

        &.top-right {
            right: 0;
            bottom: calc(100% + var(--offset));
        }

        &.bottom-left {
            left: 0;
            top: calc(100% + var(--offset));
        }

        &.bottom-right {
            right: 0;
            top: calc(100% + var(--offset));
        }

        &.left {

            &.top-left {
                top: auto;
                bottom: 0;
            }

            top: 0;
            left: calc(-100% - 22px);
        }

        &.right {
            top: 0;
            right: calc(-100% - 28px);

            &.top-left {
                left: auto;
                bottom: 0;
                top: auto;
            }

            &.bottom-left {
                left: auto;
            }
        }
    }
}
</style>