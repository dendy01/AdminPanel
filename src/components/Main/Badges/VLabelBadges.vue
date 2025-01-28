<template>
    <div class="badges">
        <h2 class="title">
            Label Badges
        </h2>
        <div class="badges-wrap">
            <small class="slogan">
                Label Default
            </small>
            <div class="badges-wrap__items">
                <Badge
                    v-for="variant in Object.values(GlobalColors)"
                    :key="variant"
                    :color="variant"
                    label
                    :size="BadgeSizes.MEDIUM"
                >
                    {{ variant }}
                </Badge>
            </div>
        </div>
        <hr class="line">
        <div class="badges-wrap__pills">
            <small class="slogan">
                Label Pills
            </small>
            <div class="badges-wrap__items">
                <Badge
                    v-for="variant in Object.values(GlobalColors)"
                    :key="variant"
                    :color="variant"
                    round
                    label
                    :size="BadgeSizes.MEDIUM"
                >
                    {{ variant }}
                </Badge>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Badge from '@/components/UI/basic/VBadge.vue';
import { GlobalColors } from '@/GlobalColors.ts';
import { BadgeSizes } from '@/model/UI/basic/Badge.ts';
</script>

<style scoped>
.badges {
    width: 50%;

    background-color: var(--bg-card);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow);

    .badges-wrap,
    .badges-wrap__pills {
        padding: 0 20px 20px 20px;

        .badges-wrap__items {
            margin-top: var(--margin-xl);

            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
        }
    }

    .badges-wrap__pills {
        padding-top: var(--padding-xxl);
    }
}
</style>