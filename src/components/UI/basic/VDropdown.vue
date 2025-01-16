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
            ref="menuRef"
            class="dropdown-menu"
            :class="[currentPosition, currentLeft, currentRight]"
            :style="{ display: isOpen ? 'block' : 'none' }"
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
    position?: Positions;
    left?: 'left';
    right?: 'right';
}

const props = defineProps<IPropsType>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const menuRef = ref<HTMLElement | null>(null);
const currentPosition = ref(props.position);
const currentLeft = ref(props.left);
const currentRight = ref(props.right);

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
        const windowWidth = window.innerWidth;

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

        if (menuRect.left > windowWidth && currentPosition.value) {
            if (currentPosition.value === Positions.TOP_LEFT) {
                currentPosition.value = Positions.TOP_RIGHT;
            }
            if (currentPosition.value === Positions.BOTTOM_LEFT) {
                currentPosition.value = Positions.BOTTOM_RIGHT;
            }
        }

        if (menuRect.right < 0 && currentPosition.value) {
            if (currentPosition.value === Positions.TOP_RIGHT) {
                currentPosition.value = Positions.TOP_LEFT;
            }
            if (currentPosition.value === Positions.BOTTOM_RIGHT) {
                currentPosition.value = Positions.BOTTOM_LEFT;
            }
        }
    }
};

watch(isOpen, (newValue) => {
    if (newValue) {
        window.addEventListener('scroll', changePosition, true);
        window.addEventListener('resize', changePosition);
    } else {
        window.removeEventListener('scroll', changePosition, true);
        window.removeEventListener('resize', changePosition);
    }
});

onMounted(() => {
    document.body.addEventListener('click', eventActive);
});

onUnmounted(() => {
    document.body.removeEventListener('click', eventActive);
    window.removeEventListener('scroll', changePosition, true);
    window.removeEventListener('resize', changePosition);
});
</script>

<style scoped>
.dropdown-wrapper {
    position: relative;

    .dropdown-btn__split {
        display: flex;
    }

    .dropdown-menu {
        padding: 8px 0;
        border-radius: 8px;

        position: absolute;
        z-index: 1010;

        background-color: var(--bg-primary);
        box-shadow: 0 2px 4px var(--color-bs);

        &.top-left {
            left: 0;
            bottom: calc(100% + 4px);
        }

        &.top-right {
            right: 0;
            bottom: calc(100% + 4px);
        }

        &.bottom-left {
            left: 0;
            top: calc(100% + 4px);
        }

        &.bottom-right {
            right: 0;
            top: calc(100% + 4px);
        }

        &.left {
            top: 0;
            left: calc(-100% - 22px);
        }

        &.right {
            top: 0;
            right: calc(-100% - 28px);
        }
    }
}
</style>