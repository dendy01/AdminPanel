<template>
    <div
        class="accordion"
        :class="[
            isOpen && 'active',
            round && 'round',
            roundTop && 'round-top',
            roundBottom && 'round-bottom',
            accordionCenter && 'accordion-center',
        ]"
        ref="accordionRef"
    >
        <slot
            name="head"
            :toggle="toggleOpen"
        />
        <div
            class="accordion-content"
            :style="{ maxHeight: changeHeight }"
            ref="contentRef"
        >
            <div class="accordion-content__body">
                <slot name="body" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

interface IPropsType {
    round?: boolean;
    roundTop?: boolean;
    roundBottom?: boolean;
    accordionCenter?: boolean;
}

defineProps<IPropsType>();

const isOpen = ref<boolean>(false);
const accordionRef = ref<HTMLDivElement | null>(null);
const contentRef = ref<HTMLDivElement | null>(null);

const toggleOpen = () => {
    isOpen.value = !isOpen.value;
};

const eventActive = (event: MouseEvent) => {
    if (accordionRef.value && !accordionRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

const changeHeight = computed(() => {
    if (!isOpen.value) {
        return '0px';
    } else {
        if (contentRef.value) {
            return `${ contentRef.value.scrollHeight }px`;
        } else {
            return 'auto';
        }
    }
});

onMounted(() => {
    window.addEventListener('click', eventActive);
});

onUnmounted(() => {
    window.removeEventListener('click', eventActive);
});
</script>

<style lang="scss">
@import '@/style/variables.scss';

.accordion {
    background-color: var(--bg-card);
    transition: margin $transition-time $transition-duration;

    &.round {
        border-radius: 6px;
    }

    &.round-top {
        border-radius: 6px 6px 0 0;
    }

    &.round-bottom {
        border-radius: 0 0 6px 6px;
    }

    &.accordion-center {
        margin: 1px 0;
    }

    .cross-icon {
        width: 20px;
        height: 20px;

        transition: transform $transition-time $transition-duration;
        transform: rotate(90deg);
    }

    &.active {
        margin: 8px 0;
        border-radius: 6px;
        box-shadow: var(--shadow);
        transition: transform $transition-time $transition-duration;

        .cross-icon {
            transition: transform $transition-time $transition-duration;
            transform: rotate(-90deg);
        }
    }

    .accordion-content {
        overflow: hidden;
        max-height: 0;

        font-size: 15px;
        font-weight: 400;

        transition: max-height $transition-time $transition-duration;
        color: var(--color-gray);

        .accordion-content__body {
            padding: 0 20px 20px;
        }
    }
}
</style>