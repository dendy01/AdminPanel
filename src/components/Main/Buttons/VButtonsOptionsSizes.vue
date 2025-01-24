<template>
    <div class="basic-buttons__wrap--row">
        <small class="slogan">{{ text }}</small>
        <div>
            <Button
                v-for="variant in Object.values(ButtonSizes)"
                :key="`${variant}_${Math.random}`"
                :color="GlobalColors.PRIMARY"
                :btn-size="variant"
            >
                <span v-if="variant === 'medium'">Button</span>
                <span v-else>Button {{ variant }}</span>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/UI/basic/VButton.vue';
import { ButtonSizes } from '@/model/UI/basic/Button';
import { GlobalColors } from '@/GlobalColors.ts';

interface IPropsType {
    text: string;
}

defineProps<IPropsType>();
</script>

<style scoped lang="scss">
.basic-buttons__wrap--row {
    padding: var(--padding-20);

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

    button {
        margin: var(--margin-16) 8px 0 0;
    }
}
</style>