<template>
    <h5 class="title">
        Customized Accordion
    </h5>

    <div class="accordion-wrap">
        <VCustomizedItemsAccordion />
        <VCustomizedItemsWithIconAccordion />
    </div>
</template>

<script setup lang="ts">
import VCustomizedItemsAccordion from '@/components/Main/Accordion/VCustomizedItemsAccordion.vue';
import VCustomizedItemsWithIconAccordion from '@/components/Main/Accordion/VCustomizedItemsWithIconAccordion.vue';
</script>

<style scoped lang="scss">
.accordion-wrap {
    display: flex;
    gap: 20px;
    padding: 0 var(--padding-20);

    .accordion-wrap__body {
        width: 50%;
    }
}
</style>