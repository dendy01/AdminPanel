<template>
    <div
        class="dropdown-wrapper"
        ref="dropdown"
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

        <VButton
            v-else-if="hover"
            :color="color"
            :icon-right="iconRight"
            :label="label"
            :outline="outline"
            @mouseenter="isOpen = true"
            @mouseleave="isOpen = false"
        >
            {{ text }}
        </VButton>

        <VButton
            v-else
            :color="color"
            :icon-left="iconLeft"
            :icon-right="iconRight"
            :label="label"
            :outline="outline"
            :round="round"
            :is-icon="isIcon"
            @click="isOpen = !isOpen"
        >
            {{ text }}
        </VButton>
        <ul
            class="dropdown-menu"
            :class="{'dropdown-left': dropdownLeft, 'dropdown-right': dropdownRight, 'dropdown-top': dropdownTop, 'dropdown-bottom': dropdownBottom}"
            :style="{ display: isOpen ? 'block' : 'none' }"
        >
            <li>Hello world</li>
        </ul>
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

    dropdownLeft?: boolean;
    dropdownRight?: boolean;
    dropdownTop?: boolean;
    dropdownBottom?: boolean;
}

defineProps<IPropsType>();

const isOpen = ref(false);
const dropdown = ref<HTMLElement | null>(null);

const eventActive = (event: any) => {
    if (dropdown.value) {
        if(!dropdown.value.contains(event.target)) {
            isOpen.value = false;
        }
    }
};

onMounted(() => {
    document.body.addEventListener('click', eventActive);
});

onUnmounted(() => {
    document.body.removeEventListener('click', eventActive);
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

        background: var(--bg-primary);
        box-shadow: 0 2px 4px var(--color-bs);

        &.dropdown-left {
            left: 0;
        }

        &.dropdown-right {

            right: 0;
        }

        &.dropdown-top {
            top: 0;
        }

        &.dropdown-bottom {
            bottom: -55px;
        }

        li {
            padding: 8px 20px;
            cursor: pointer;

            display: flex;
            align-items: center;
            gap: 12px;

            white-space: nowrap;

            &:hover {
                background-color: var(--color-gray);
            }
        }
    }
}
</style>