<template>
    <div
        class="accordion"
        :class="[
            isOpen && 'active-accordion',
            round && 'round',
            roundType
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
import { AccordionTypes } from '@/model/UI/basic/Accordion.ts';

interface IPropsType {
    roundType?: AccordionTypes;
    round?: boolean;
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

<style scoped lang="scss">
@import '@/style/variables.scss';

.accordion {
    background-color: var(--bg-card);
    transition: margin var(--duration) var(--timing-function);

    &.round {
        border-radius: var(--border-radius-6);
    }

    &.round-top {
        border-radius: var(--border-radius-6) var(--border-radius-6) 0 0;
    }

    &.round-bottom {
        border-radius: 0 0 var(--border-radius-6) var(--border-radius-6);
    }

    &.accordion-center {
        border-top: 1px solid var(--bg-primary);
        border-bottom: 1px solid var(--bg-primary);
    }

    .accordion-content {
        overflow: hidden;
        max-height: 0;

        font-size: var(--font-size-15);
        font-weight: 400;

        transition: max-height var(--duration) var(--timing-function);
        color: var(--color-gray);

        .accordion-content__body {
            padding: 0 var(--padding-20) var(--padding-20);
        }
    }
}
</style>