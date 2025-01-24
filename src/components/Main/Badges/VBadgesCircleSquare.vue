<template>
    <div class="badges">
        <h2 class="title">
            Badge Circle & Square Style
        </h2>
        <div class="wrapper">
            <div class="wrapper-content">
                <h5 class="title-sm">
                    Basic
                </h5>
                <div class="badges-wrap">
                    <small class="slogan">
                        Default
                    </small>
                    <div class="badges-wrap__items">
                        <Badge
                            v-for="(variant, index) in Object.values(GlobalColors)"
                            :key="variant"
                            :color="variant"
                            square
                            :size="BadgeSizes.MEDIUM"
                        >
                            {{ index + 1 }}
                        </Badge>
                    </div>
                    <div class="badges-wrap__items">
                        <Badge
                            v-for="(variant, index) in Object.values(GlobalColors)"
                            :key="variant"
                            :color="variant"
                            round
                            circle
                            :size="BadgeSizes.MEDIUM"
                        >
                            {{ index + 1 }}
                        </Badge>
                    </div>
                </div>
            </div>
            <div class="wrapper-content">
                <h5 class="title-sm">
                    Label
                </h5>
                <div class="badges-wrap">
                    <small class="slogan">
                        Label
                    </small>
                    <div class="badges-wrap__items">
                        <Badge
                            v-for="(variant, index) in Object.values(GlobalColors)"
                            :key="variant"
                            :color="variant"
                            square
                            label
                            :size="BadgeSizes.MEDIUM"
                        >
                            {{ index + 1 }}
                        </Badge>
                    </div>
                    <div class="badges-wrap__items">
                        <Badge
                            v-for="(variant, index) in Object.values(GlobalColors)"
                            :key="variant"
                            :color="variant"
                            round
                            circle
                            label
                            :size="BadgeSizes.MEDIUM"
                        >
                            {{ index + 1 }}
                        </Badge>
                    </div>
                </div>
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
    margin-top: var(--margin-24);

    background-color: var(--bg-card);
    border-radius: var(--border-radius-6);
    box-shadow: var(--shadow);

    .wrapper {
        display: flex;

        .wrapper-content {
            width: 50%;
            border-right: 1px solid var(--color-gray-light);
        }
    }

    .badges-wrap,
    .badges-wrap__pills {
        padding: 0 20px 20px 20px;

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