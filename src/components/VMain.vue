<template>

    <main class="main">
        <VHeader></VHeader>
        <RouterView />
    </main>

</template>

<script setup lang="ts">
import VHeader from "@/components/VHeader.vue";
</script>

<style scoped lang="scss">
.main {
    width: calc(100% - 260px);
    margin-left: 260px;
    padding: 0 120px;
    border: 1px solid blue;
}

@media (max-width: 920px) {
    .main {
        width: 100%;
        margin: 0;
    }
}
</style>