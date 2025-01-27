<template>
    <VBasicAccordion />
    <hr class="line">
    <VCustomizedAccordion />
</template>

<script setup lang="ts">
import VBasicAccordion from '@/components/Main/Accordion/VBasicAccordion.vue';
import VCustomizedAccordion from '@/components/Main/Accordion/VCustomizedAccordion.vue';
</script>

<style scoped>
.line {
    margin: 40px 0;
}
</style>