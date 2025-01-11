<template>
    <div class="alert-wrapper__col">
        <h2 class="title">
            {{ text }}
        </h2>
        <VAlert
            v-for="variant in GlobalColors"
            :key="`${variant}-${Math.random}`"
            :color="variant"
            :icon="icons[variant]"
        >
            This is a {{ variant }} outline alert — check it out!
        </VAlert>
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
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: var(--bg-card);

    .title {
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 500;
        color: var(--color-text);
    }
}
</style>