<template>

    <main class="main">
        <Header></Header>
    </main>

</template>

<script setup lang="ts">
    import Header from "./Header.vue";
</script>

<style scoped lang="scss">
    .main {
        width: calc(100% - 260px);
        margin-left: 260px;
        padding: 0 120px;
        border: 1px solid blue;
    }
</style>