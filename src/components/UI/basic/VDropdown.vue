<template>
    <div
        class="dropdown-wrapper"
        ref="dropdownRef"
    >
        <div
            v-if="split"
            class="dropdown-btn__split"
        >
            <VButton
                v-if="split"
                :color="color"
                :label="label"
                :outline="outline"
                split-right
            >
                {{ text }}
            </VButton>
            <VButton
                v-if="split"
                :color="color"
                :outline="outline"
                is-icon
                split-left
                :icon-right="iconRight"
                @click="isOpen = !isOpen"
                class="split-button-dropdown"
            />
        </div>

        <slot
            name="dropdown"
            :toggle="toggleOpen"
        />

        <div
            class="dropdown-menu"
            :style="{ display: isOpen ? 'block' : 'none' }"
        >
            <slot name="menu" />
        </div>
    </div>
</template>

<script setup lang="ts">
import VButton from '@/components/UI/basic/VButton.vue';
import { GlobalColors } from '@/GlobalColors.ts';
import { onMounted, onUnmounted, ref } from 'vue';

interface IPropsType {
    color: GlobalColors;
    text?: string;
    label?: boolean;
    outline?: boolean;
    split?: boolean;
    iconLeft?: any;
    iconRight?: any;
    hover?: boolean;
    round?: boolean;
    isIcon?: boolean;
    dropdown?: boolean;
}

defineProps<IPropsType>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const height = ref<number>(0);

const eventActive = (event: any) => {
    if (dropdownRef.value) {
        if(!dropdownRef.value.contains(event.target)) {
            isOpen.value = false;
        }
    }
};

const toggleOpen = () => {
    isOpen.value = !isOpen.value;
};

onMounted(() => {
    if (dropdownRef.value) {
        height.value = dropdownRef.value.offsetHeight + 4;
    }
    document.body.addEventListener('click', eventActive);
});

onUnmounted(() => {
    document.body.removeEventListener('click', eventActive);
});
</script>

<style scoped>
.dropdown-wrapper {
    --position: v-bind(height);

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
    }
}
</style>