<template>
    <div class="dropdown-wrapper">
        <h5 class="title">
            Dropdowns
        </h5>
        <VPositionVariation :text="'Basic'" />
    </div>
</template>
<script setup lang="ts">
import VPositionVariation from '@/components/Main/Dropdown/VPositionVariation.vue';
</script>

<style scoped>
.dropdown-wrapper {
    margin: var(--margin-xxxl) 0;
    border-radius: var(--border-radius-lg);
    box-shadow: 0 2px 8px var(--color-bs);
    background-color: var(--bg-card);
}
</style>