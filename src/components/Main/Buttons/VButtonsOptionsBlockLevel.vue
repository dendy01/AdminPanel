<template>
    <div class="basic-buttons__wrap--row">
        <small class="slogan">{{ text }}</small>
        <div class="row">
            <Button
                :color="GlobalColors.PRIMARY"
                :btn-size="ButtonSizes.LG"
            >
                <span>Button</span>
            </Button>
            <Button
                :color="GlobalColors.SECONDARY"
                :btn-size="ButtonSizes.LG"
            >
                <span>Button</span>
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
    padding: var(--padding-xxl);

    .row {
        width: 50%;
        margin: var(--margin-lg) auto 0 auto;

        display: flex;
        flex-direction: column;

        button {
            margin: var(--margin-md) 0 0 0;
        }
    }

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