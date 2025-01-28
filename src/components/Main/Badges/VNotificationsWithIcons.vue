<template>
    <div class="badges">
        <h2 class="title">
            Button with Badges Notification
        </h2>
        <div class="badges-wrap">
            <div class="badges-wrap__items">
                <img
                    src="@/assets/icons/icons-header/profile.png"
                    alt="profile"
                    class="header-icons__list--profile"
                >

                <Badge
                    :color="GlobalColors.PRIMARY"
                    dot
                    circle
                    pos-abs
                    :size="BadgeSizes.XS"
                    :position="Positions.TOP_LEFT"
                />
            </div>
            <div class="badges-wrap__items">
                <img
                    src="@/assets/icons/icons-header/profile.png"
                    alt="profile"
                    class="header-icons__list--profile"
                >

                <Badge
                    :color="GlobalColors.WARNING"
                    pos-abs
                    dot
                    label
                    circle
                    :size="BadgeSizes.XS"
                    badge-border
                    :position="Positions.TOP_RIGHT"
                />
            </div>
            <div class="badges-wrap__items">
                <img
                    src="@/assets/icons/icons-header/profile.png"
                    alt="profile"
                    class="header-icons__list--profile"
                >

                <Badge
                    :color="GlobalColors.PRIMARY"
                    pos-abs
                    circle
                    dot
                    :size="BadgeSizes.XL"
                    :position="Positions.BOTTOM_LEFT"
                >
                    4
                </Badge>
            </div>
            <div class="badges-wrap__items">
                <img
                    src="@/assets/icons/icons-header/profile.png"
                    alt="profile"
                    class="header-icons__list--profile"
                >

                <Badge
                    :color="GlobalColors.INFO"
                    pos-abs
                    circle
                    dot
                    :size="BadgeSizes.LG"
                    :position="Positions.BOTTOM_RIGHT"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Badge from '@/components/UI/basic/VBadge.vue';
import { GlobalColors } from '@/GlobalColors.ts';
import { BadgeSizes, Positions } from '@/model/UI/basic/Badge.ts';
</script>

<style scoped>
.badges {
    width: 50%;

    background-color: var(--bg-card);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow);

    .badges-wrap {
        padding: 0 20px 20px 20px;

        display: flex;
        flex-wrap: wrap;
        gap: 16px;

        .badges-wrap__items {
            width: 40px;
            height: 40px;
            margin-top: var(--margin-xl);

            position: relative;
        }
    }
}
</style>