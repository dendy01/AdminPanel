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
import UserFollowIcon from '@/assets/icons/icons-alerts/user-follow.svg';
import LineChartIcon from '@/assets/icons/icons-alerts/line-chart.svg';
import CheckboxCircleIcon from '@/assets/icons/icons-alerts/checkbox-circle.svg';
import ErrorIcon from '@/assets/icons/icons-alerts/error.svg';
import WarningIcon from '@/assets/icons/icons-alerts/warning.svg';
import InformationIcon from '@/assets/icons/icons-alerts/information.svg';
import StarIcon from '@/assets/icons/icons-alerts/star.svg';

interface IPropsType {
    text: string;
}

defineProps<IPropsType>();

const icons = {
    primary: UserFollowIcon,
    secondary: LineChartIcon,
    success: CheckboxCircleIcon,
    danger: ErrorIcon,
    warning: WarningIcon,
    info: InformationIcon,
    dark: StarIcon
};
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