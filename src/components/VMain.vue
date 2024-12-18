<template>

    <main class="main">
        <VHeader></VHeader>
        <RouterView />
    </main>

</template>

<script setup lang="ts">
import VHeader from "@/components/Header/VHeader.vue";
</script>

<style scoped lang="scss">
.main {
    width: calc(100% - 260px);
    margin-left: 260px;
    padding: 0 120px;
    background: var(--bg-primery);
}

@media (max-width: 920px) {
    .main {
        width: 100%;
        margin: 0;
    }
}
</style>