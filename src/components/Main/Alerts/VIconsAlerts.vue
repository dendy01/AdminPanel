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
                :icon="icons[variant]"
            >
                This is a {{ variant }} alert — check it out!
            </VAlert>
        </div>
    </div>
</template>

<script setup lang="ts">
import VAlert from '@/components/UI/basic/VAlert.vue';
import { GlobalColors } from '@/GlobalColors.ts';
import UserFollow from '@/assets/icons/icons-alerts/user-follow.svg';
import LineChart from '@/assets/icons/icons-alerts/line-chart.svg';
import CheckboxCircle from '@/assets/icons/icons-alerts/checkbox-circle.svg';
import Error from '@/assets/icons/icons-alerts/error.svg';
import Warning from '@/assets/icons/icons-alerts/warning.svg';
import Information from '@/assets/icons/icons-alerts/information.svg';
import Star from '@/assets/icons/icons-alerts/star.svg';

interface IPropsType {
    text: string;
}

defineProps<IPropsType>();

const icons = {
    primary: UserFollow,
    secondary: LineChart,
    success: CheckboxCircle,
    danger: Error,
    warning: Warning,
    info: Information,
    dark: Star
};
</script>

<style scoped>
.alert-wrapper__col {
    width: 50%;
    border-radius: var(--border-radius-8);
    box-shadow: var(--shadow);
    background-color: var(--bg-card);

    .alerts {
        padding: 0 var(--padding-20) var(--padding-20) var(--padding-20);
    }
}
</style>