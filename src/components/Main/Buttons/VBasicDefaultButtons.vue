<template>
    <div class="basic-buttons__wrap">
        <h5 class="title">
            {{ text }}
        </h5>
        <div class="basic-buttons__wrap--buttons">
            <small
                v-if="!btnText"
                class="slogan"
            >Default</small>
            <div>
                <Button
                    v-for="btn in btnPrimary"
                    :key="btn.id"
                    :btn-type="btn.btnType"
                    :btn-size="btn.btnSize"
                    :label="label"
                    :outline="outline"
                    :btn-text="btnText"
                >
                    {{ btn.content }}
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
                    v-for="btn in btnPrimary"
                    :key="btn.id"
                    :btn-type="btn.btnType"
                    :btn-size="btn.btnSize"
                    :round="'round'"
                    :label="label"
                    :outline="outline"
                >
                    {{ btn.content }}
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/UI/UserInterface/VButton.vue';
import { ref, useId } from 'vue';

interface BtnPrimary {
    id: string;
    btnType: string;
    btnSize: string;
    content: string;
    round?: string;
}

interface IPropsType {
    text: string;
    label?: string;
    outline?: string;
    btnText?: string;
}

const btnPrimary = ref<BtnPrimary[]>([
    {
        id: useId(),
        btnType: 'btn-primary',
        btnSize: 'medium',
        content: 'Primary'
    },
    {
        id: useId(),
        btnType: 'btn-secondary',
        btnSize: 'medium',
        content: 'Secondary'
    },
    {
        id: useId(),
        btnType: 'btn-success',
        btnSize: 'medium',
        content: 'Success'
    },
    {
        id: useId(),
        btnType: 'btn-danger',
        btnSize: 'medium',
        content: 'Danger'
    },
    {
        id: useId(),
        btnType: 'btn-warning',
        btnSize: 'medium',
        content: 'Warning'
    },
    {
        id: useId(),
        btnType: 'btn-info',
        btnSize: 'medium',
        content: 'Info'
    },
    {
        id: useId(),
        btnType: 'btn-dark',
        btnSize: 'medium',
        content: 'Dark'
    }
]);

defineProps<IPropsType>();
</script>

<style scoped lang="scss">
.basic-buttons__wrap {
    margin-top: 24px;
    border-radius: 6px;
    box-shadow: 0 2px 8px var(--color-gray);
    background: var(--color-white);

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