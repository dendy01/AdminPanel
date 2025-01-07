<template>
    <div class="alert-wrapper">
        <div class="alert-wrapper__row">
            <VBasicAlerts :text="'Basic Alerts'" />
            <VOutlineAlerts :text="'Outline Alerts'" />
        </div>
        <div class="alert-wrapper__row">
            <VSolidAlerts :text="'Solid Alerts'" />
            <VDismissibleAlerts :text="'Dismissible Alerts'" />
        </div>
        <div class="alert-wrapper__row">
            <VIconsAlerts :text="'Alerts with Icons'" />
        </div>
    </div>
</template>
<script setup lang="ts">
import VBasicAlerts from '@/components/Main/Alerts/VBasicAlerts.vue';
import VOutlineAlerts from '@/components/Main/Alerts/VOutlineAlerts.vue';
import VSolidAlerts from '@/components/Main/Alerts/VSolidAlerts.vue';
import VDismissibleAlerts from '@/components/Main/Alerts/VDismissibleAlerts.vue';
import VIconsAlerts from '@/components/Main/Alerts/VIconsAlerts.vue';
</script>

<style scoped>
.alert-wrapper__row {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
}
</style>