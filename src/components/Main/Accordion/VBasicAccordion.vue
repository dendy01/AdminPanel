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
    padding: 0 var(--padding-20) var(--padding-20);

    .accordion-wrap__body {
        width: 50%;
    }
}
</style>