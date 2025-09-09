<template>
    <div class="badges">
        <h2 class="title">
            Dots Style
        </h2>
        <div class="badges-wrap">
            <div class="badges-wrap__content">
                <div
                    class="badges-wrap__items"
                    v-for="variant in Object.values(GlobalColors)"
                    :key="variant"
                >
                    <VBadge
                        :color="variant"
                        square
                        dot
                        :size="BadgeSizes.XS"
                    />
                    {{ variant }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GlobalColors } from '@/GlobalColors.ts';
import VBadge from '@/components/UI/basic/VBadge.vue';
import { BadgeSizes } from '@/model/UI/basic/Badge.ts';
</script>

<style scoped>
.badges {
    margin-top: var(--margin-xxxl);

    background-color: var(--bg-card);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow);

    .badges-wrap {
        .badges-wrap__content {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;

            padding: var(--padding-xxl);
            border-right: 1px solid var(--color-gray-light);

            .badges-wrap__items {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 4px;

                text-transform: capitalize;
                color: var(--color-text);
            }
        }
    }
}
</style>