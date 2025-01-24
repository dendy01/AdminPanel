<template>
    <div class="badges">
        <h2 class="title">
            Button with Badges Notification
        </h2>
        <div class="badges-wrap">
            <div class="badges-wrap__items">
                <VButton
                    :color="GlobalColors.PRIMARY"
                    label
                >
                    Primary

                    <Badge
                        :color="GlobalColors.PRIMARY"
                        square
                        pos-abs
                        :position="Positions.TOP_LEFT"
                        :size="BadgeSizes.MEDIUM"
                    >
                        4
                    </Badge>
                </VButton>
            </div>
            <div class="badges-wrap__items">
                <VButton
                    :color="GlobalColors.WARNING"
                >
                    Label Badge

                    <Badge
                        :color="GlobalColors.WARNING"
                        pos-abs
                        label
                        badge-border
                        :position="Positions.TOP_RIGHT"
                        :size="BadgeSizes.MEDIUM"
                    >
                        4
                    </Badge>
                </VButton>
            </div>
            <div class="badges-wrap__items">
                <VButton
                    :color="GlobalColors.INFO"
                    label
                >
                    Pill

                    <Badge
                        :color="GlobalColors.INFO"
                        pos-abs
                        circle
                        :position="Positions.BOTTOM_LEFT"
                        :size="BadgeSizes.MEDIUM"
                    >
                        4
                    </Badge>
                </VButton>
            </div>
            <div class="badges-wrap__items">
                <VButton
                    :color="GlobalColors.DANGER"
                    label
                >
                    Dot

                    <Badge
                        :color="GlobalColors.INFO"
                        pos-abs
                        circle
                        dot
                        :size="BadgeSizes.LG"
                        :position="Positions.BOTTOM_RIGHT"
                    />
                </VButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Badge from '@/components/UI/basic/VBadge.vue';
import { GlobalColors } from '@/GlobalColors.ts';
import VButton from '@/components/UI/basic/VButton.vue';
import { BadgeSizes, Positions } from '@/model/UI/basic/Badge.ts';
</script>

<style scoped>
.badges {
    width: 50%;

    background-color: var(--bg-card);
    border-radius: var(--border-radius-6);
    box-shadow: var(--shadow);

    .badges-wrap {
        padding: 0 20px 20px 20px;

        display: flex;
        flex-wrap: wrap;
        gap: 24px;

        .badges-wrap__items {
            margin-top: var(--margin-16);
        }
    }
}
</style>