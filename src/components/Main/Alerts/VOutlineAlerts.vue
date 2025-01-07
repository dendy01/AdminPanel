<template>
    <div class="alert-wrapper__col">
        <h2 class="title">
            {{ text }}
        </h2>
        <VAlert
            v-for="variant in GlobalColors"
            :key="`${variant}-${Math.random}`"
            :alert-type="variant"
            outline
        >
            This is a {{ variant }} outline alert — check it out!
        </VAlert>
    </div>
</template>

<script setup lang="ts">
import VAlert from '@/components/UI/basic/VAlert.vue';
import { GlobalColors } from '@/model/GlobalColors.ts';

interface IPropsType {
    text: string;
}

defineProps<IPropsType>();
</script>

<style scoped>
.alert-wrapper__col {
    width: 50%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: var(--color-white);

    .title {
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 500;
        color: var(--color-text-dark);
    }
}
</style>