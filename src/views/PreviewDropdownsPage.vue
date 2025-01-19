<template>
    <div class="wrap">
        <VDropdomnsBasicCard />
        <VDropdownsVariation :text="'text'" />
    </div>
</template>

<script setup lang="ts">
import VDropdomnsBasicCard from '@/components/Main/Dropdown/VDropdomnsBasicCard.vue';
import VDropdownsVariation from '@/components/Main/Dropdown/VDropdownsVariation.vue';
</script>

<style scoped lang="scss">
.wrap {
    height: 500vh;
}
</style>