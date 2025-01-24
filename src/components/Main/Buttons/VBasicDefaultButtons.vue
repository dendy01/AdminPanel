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
            <div class="btn-content">
                <Button
                    v-for="variant in Object.values(GlobalColors)"
                    :key="`${variant}_${Math.random}`"
                    :color="variant"
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
            <div class="btn-content">
                <Button
                    v-for="variant in Object.values(GlobalColors)"
                    :key="`${variant}_${Math.random}`"
                    :color="variant"
                    :btn-size="ButtonSizes.MEDIUM"
                    round
                    :outline="outline"
                    :label="label"
                >
                    {{ variant }}
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/UI/basic/VButton.vue';
import { ButtonSizes } from '@/model/UI/basic/Button';
import { GlobalColors } from '@/GlobalColors.ts';

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
    margin-top: var(--margin-24);
    border-radius: var(--border-radius-6);
    box-shadow: 0 2px 8px var(--color-bs);
    background-color: var(--bg-card);

    .slogan {
        font-weight: 500;
        color: var(--color-gray);
    }

    .basic-buttons__wrap--buttons {
        padding: var(--padding-20);
    }

    .basic-buttons__wrap--buttons:first-of-type {
        padding-top: 0;
    }

    .line {
        width: 100%;
        height: 1px;
        background-color: var(--color-gray-light);
    }
}

.basic-buttons__wrap {
    button {
        margin: var(--margin-16) 6px 0 0;
    }
}
</style>