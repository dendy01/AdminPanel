<template>
    <div class="alert-wrapper__col">
        <h2 class="title">
            {{ text }}
        </h2>
        <div class="alerts">
            <VAlert
                v-for="variant in GlobalColors"
                :key="`${variant}-${Math.random}`"
                :color="variant"
                basic
            >
                This is a {{ variant }} alert — check it out!
            </VAlert>
        </div>
    </div>
</template>

<script setup lang="ts">
import VAlert from '@/components/UI/basic/VAlert.vue';
import { GlobalColors } from '@/GlobalColors.ts';

interface IPropsType {
    text: string;
}

defineProps<IPropsType>();
</script>

<style scoped>
.alert-wrapper__col {
    width: 50%;
    border-radius: var(--border-radius-xl);
    box-shadow: var(--shadow);
    background-color: var(--bg-card);

    .alerts {
        padding: 0 var(--padding-xxl) var(--padding-xxl) var(--padding-xxl);
    }
}
</style>