<template>
    <div class="basic-buttons__wrap">
        <h5 class="title">
            {{ text }}
        </h5>
        <div class="basic-buttons__wrap--buttons">
            <small
                v-if="!btnText"
                class="slogan"
            >
                Default
            </small>
            <div>
                <Button
                    v-for="variant in Object.values(GlobalColors)"
                    :key="`${variant}_${Math.random}`"
                    :btn-type="variant"
                    :btn-size="ButtonSizes.MEDIUM"
                    :btn-text="btnText"
                    :outline="outline"
                    :label="label"
                >
                    <span class="btn-text-capit">
                        {{ variant }}
                    </span>
                </Button>
            </div>
        </div>
        <hr class="line">
        <div
            v-if="!btnText"
            class="basic-buttons__wrap--buttons"
        >
            <small class="slogan">Rounded</small>
            <div>
                <Button
                    v-for="variant in Object.values(GlobalColors)"
                    :key="`${variant}_${Math.random}`"
                    :btn-type="variant"
                    :btn-size="ButtonSizes.MEDIUM"
                    round
                    :outline="outline"
                    :label="label"
                >
                    <span class="btn-text-capit">
                        {{ variant }}
                    </span>
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/UI/basic/VButton.vue';
import { ButtonSizes } from '@/model/UI/basic/Button';
import { GlobalColors } from '@/model/GlobalColors.ts';

interface IPropsType {
    text: string;
    label?: boolean;
    outline?: boolean;
    btnText?: boolean;
}

defineProps<IPropsType>();
</script>

<style scoped lang="scss">
.basic-buttons__wrap {
    margin-top: 24px;
    border-radius: 6px;
    box-shadow: 0 2px 8px var(--color-gray);
    background: var(--color-white);

    .btn-text-capit {
        text-transform: capitalize;
    }

    .title {
        font-size: 18px;
        font-weight: 500;
        color: var(--color-text-dark);
    }

    .slogan {
        font-weight: 500;
        color: var(--color-gray);
    }

    .title,
    .basic-buttons__wrap--buttons {
        padding: 20px;
    }

    .basic-buttons__wrap--buttons:first-of-type {
        padding-top: 0;
    }

    .line {
        width: 100%;
        height: 1px;
        background: var(--color-gray-light);
    }
}
</style>