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
    margin: 24px 0;
    border-radius: 6px;
    box-shadow: 0 2px 8px var(--color-bs);
    background-color: var(--bg-card);
}
</style>