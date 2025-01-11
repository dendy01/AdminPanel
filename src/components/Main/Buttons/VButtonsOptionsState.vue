<template>
    <div class="basic-buttons__wrap--row">
        <small class="slogan">{{ text }}</small>
        <div>
            <Button
                v-for="variant in Object.values(ButtonState)"
                :key="`${variant}_${Math.random}`"
                :color="GlobalColors.PRIMARY"
                :btn-size="ButtonSizes.MEDIUM"
                :btn-state="variant"
            >
                <span>{{ variant }}</span>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/UI/basic/VButton.vue';
import { ButtonSizes, ButtonState } from '@/model/UI/basic/Button';
import { GlobalColors } from '@/GlobalColors.ts';

interface IPropsType {
    text: string;
}

defineProps<IPropsType>();
</script>

<style scoped lang="scss">
.basic-buttons__wrap--row {
    padding: 20px;

    &:last-of-type {
        border-right: none;
    }

    .slogan {
        font-weight: 500;
        text-transform: capitalize;
        color: var(--color-gray);
    }

    span {
        text-transform: capitalize;
    }
}
</style>