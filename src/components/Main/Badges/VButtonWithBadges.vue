<template>
    <div class="badges">
        <h2 class="title">
            Button with Badges
        </h2>
        <div class="badges-wrap">
            <div class="badges-wrap__content">
                <small class="slogan">
                    Default
                </small>
                <div class="badges-wrap__items">
                    <VButton :color="GlobalColors.PRIMARY">
                        Text
                        <VBadge
                            :color="GlobalColors.SECONDARY"
                            square
                            :size="BadgeSizes.MEDIUM"
                        >
                            4
                        </VBadge>
                    </VButton>
                    <VButton :color="GlobalColors.PRIMARY">
                        Text
                        <VBadge
                            :color="GlobalColors.SECONDARY"
                            round
                            circle
                            :size="BadgeSizes.MEDIUM"
                        >
                            4
                        </VBadge>
                    </VButton>
                </div>
            </div>
            <div class="badges-wrap__content">
                <small class="slogan">
                    Label
                </small>
                <div class="badges-wrap__items">
                    <VButton
                        :color="GlobalColors.PRIMARY"
                        label
                    >
                        Text
                        <VBadge
                            :color="GlobalColors.SECONDARY"
                            square
                            :size="BadgeSizes.MEDIUM"
                        >
                            4
                        </VBadge>
                    </VButton>
                    <VButton
                        :color="GlobalColors.PRIMARY"
                        label
                    >
                        Text
                        <VBadge
                            :color="GlobalColors.SECONDARY"
                            round
                            circle
                            :size="BadgeSizes.MEDIUM"
                        >
                            4
                        </VBadge>
                    </VButton>
                </div>
            </div>
            <div class="badges-wrap__content">
                <small class="slogan">
                    Outline
                </small>
                <div class="badges-wrap__items">
                    <VButton
                        :color="GlobalColors.PRIMARY"
                        outline
                    >
                        Text
                        <VBadge
                            :color="GlobalColors.PRIMARY"
                            square
                            :size="BadgeSizes.MEDIUM"
                        >
                            4
                        </VBadge>
                    </VButton>
                    <VButton
                        :color="GlobalColors.SECONDARY"
                        outline
                    >
                        Text
                        <VBadge
                            :color="GlobalColors.SECONDARY"
                            circle
                            round
                            :size="BadgeSizes.MEDIUM"
                        >
                            4
                        </VBadge>
                    </VButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GlobalColors } from '@/GlobalColors.ts';
import VButton from '@/components/UI/basic/VButton.vue';
import VBadge from '@/components/UI/basic/VBadge.vue';
import { BadgeSizes } from '@/model/UI/basic/Badge.ts';
</script>

<style scoped>
.badges {
    margin-top: var(--margin-24);

    background-color: var(--bg-card);
    border-radius: var(--border-radius-6);
    box-shadow: var(--shadow);

    .badges-wrap {
        display: flex;

        .badges-wrap__content {
            width: 33.33%;
            padding: 20px;
            border-right: 1px solid var(--color-gray-light);
        }

        .badges-wrap__items {
            margin-top: var(--margin-16);

            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
        }
    }
}
</style>