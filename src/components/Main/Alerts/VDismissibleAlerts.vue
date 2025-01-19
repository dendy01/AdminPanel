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
                close
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
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: var(--bg-card);

    .alerts {
        padding: 0 20px 20px 20px;
    }
}
</style>