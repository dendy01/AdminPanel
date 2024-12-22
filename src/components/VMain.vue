<template>
    <main
        class="main"
        :class="{ 'main-check': !isCheck.checking }"
    >
        <div class="container">
            <VHeader />
            <RouterView />
        </div>
    </main>
</template>

<script setup lang="ts">
import VHeader from '@/components/Header/VHeader.vue';
import { isChecking } from '@/store';

const isCheck = isChecking();
</script>

<style scoped lang="scss">
.main {
    width: calc(100% - 260px);
    margin-left: 260px;
    background: var(--bg-primery);

    .container {
        width: 100%;
        max-width: 1440px;
        padding: 0 20px;
        margin: 0 auto;
        position: relative;
    }
}

.main-check {
    width: 100%;
    max-width: 1440px;
    padding-left: 80px;
    margin: 0 auto;
    background: var(--bg-primery);

    .container {
        width: 100%;
        padding: 0 20px;
        position: relative;
    }
}
</style>