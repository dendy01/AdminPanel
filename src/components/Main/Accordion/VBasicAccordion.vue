<template>
    <h5 class="title">
        Accordion
    </h5>

    <div class="accordion-wrap">
        <VBasicItemsAccordion />
        <VBasicItemsWithoutArrowAccordion />
    </div>
</template>

<script setup lang="ts">
import VBasicItemsAccordion from '@/components/Main/Accordion/VBasicItemsAccordion.vue';
import VBasicItemsWithoutArrowAccordion from '@/components/Main/Accordion/VBasicItemsWithoutArrowAccordion.vue';
</script>

<style scoped lang="scss">
.accordion-wrap {
    display: flex;
    gap: 20px;
    padding: 0 var(--padding-xxl) var(--padding-xxl);

    .accordion-wrap__body {
        width: 50%;
    }
}
</style>