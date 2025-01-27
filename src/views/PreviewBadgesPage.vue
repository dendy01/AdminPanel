<template>
    <div class="wrap">
        <VBasicBadges />
        <VLabelBadges />
    </div>
    <VButtonWithBadges />
    <VBadgesCircleSquare />
    <VBadgesCircleSquareIcons />
    <VBadgesDots />
    <div class="notification-wrap">
        <VButtonsBadgesNotification />
        <VNotificationsWithIcons />
    </div>
</template>

<script setup lang="ts">
import VBasicBadges from '@/components/Main/Badges/VBasicBadges.vue';
import VLabelBadges from '@/components/Main/Badges/VLabelBadges.vue';
import VButtonWithBadges from '@/components/Main/Badges/VButtonWithBadges.vue';
import VBadgesCircleSquare from '@/components/Main/Badges/VBadgesCircleSquare.vue';
import VBadgesCircleSquareIcons from '@/components/Main/Badges/VBadgesCircleSquareIcons.vue';
import VBadgesDots from '@/components/Main/Badges/VBadgesDots.vue';
import VButtonsBadgesNotification from '@/components/Main/Badges/VButtonsBadgesNotification.vue';
import VNotificationsWithIcons from '@/components/Main/Badges/VNotificationsWithIcons.vue';
</script>

<style scoped>
.wrap {
    display: flex;
    gap: 24px;
}

.notification-wrap {
    display: flex;
    gap: 24px;
    margin: var(--margin-xxxl) 0;
}
</style>