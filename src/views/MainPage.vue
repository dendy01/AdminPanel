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
import { useChecking } from '@/store/useCheck.ts';

const isCheck = useChecking();
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.main {
    width: calc(100% - $sidebar-width);
    margin-left: $sidebar-width;
    transition: width $transition-time $transition-duration;
    background-color: var(--bg-primary);

    .container {
        width: $fullscrin-width;
        max-width: $container-width;
        padding: 0 20px;
        margin: 0 auto;
        position: $position-rel;
    }
}

.main-check {
    width: $fullscrin-width;
    margin: 0 auto;
    padding-left: 80px;
    background-color: var(--bg-primary);

    .container {
        width: $fullscrin-width;
        max-width: $container-width;
        padding: 0 20px;
        margin: 0 auto;
        position: $position-rel;
    }
}

@media (max-width: $response-sw) {

    .main,
    .main-check {
        width: $fullscrin-width;
        margin: 0;
        padding-left: 0;
    }
}
</style>