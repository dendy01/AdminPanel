<template>
    <div class="dropdown-wrapper">
        <h5 class="title">
            Dropdowns
        </h5>
        <VBasicDropdown :text="'Basic'" />
        <hr class="line">
        <VLabelDropdown :text="'Label'" />
        <hr class="line">
        <VOutlineDropdown :text="'Outline'" />
        <hr class="line">
        <VSplitDropdown text="Split" />
        <hr class="line">
        <VElemsDropdown />
    </div>
</template>
<script setup lang="ts">
import VBasicDropdown from '@/components/Main/Dropdown/VBasicDropdown.vue';
import VLabelDropdown from '@/components/Main/Dropdown/VLabelDropdown.vue';
import VOutlineDropdown from '@/components/Main/Dropdown/VOutlineDropdown.vue';
import VSplitDropdown from '@/components/Main/Dropdown/VSplitDropdown.vue';
import VElemsDropdown from '@/components/Main/Dropdown/VElemsDropdown.vue';
</script>

<style scoped>
.dropdown-wrapper {
    margin-top: 24px;
    border-radius: 6px;
    box-shadow: 0 2px 8px var(--color-bs);
    background: var(--bg-card);
}
</style>