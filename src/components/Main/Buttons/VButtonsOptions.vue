<template>
    <div class="basic-buttons__wrap">
        <h5 class="title">
            {{ text }}
        </h5>
        <div class="basic-buttons__wrap--buttons">
            <div class="basic-buttons__wrap--col">
                <VButtonsOptionsSizes :text="'Sizes'" />
            </div>
            <hr class="line">
            <div class="basic-buttons__wrap--col">
                <VButtonsOptionsState :text="'Buttons State'" />
            </div>
            <hr class="line">
            <VButtonsOptionsBlockLevel :text="'Block level buttons'" />
        </div>
    </div>
</template>

<script setup lang="ts">
import VButtonsOptionsSizes from '@/components/Main/Buttons/VButtonsOptionsSizes.vue';
import VButtonsOptionsState from '@/components/Main/Buttons/VButtonsOptionsState.vue';
import VButtonsOptionsBlockLevel from '@/components/Main/Buttons/VButtonsOptionsBlockLevel.vue';

interface IPropsType {
    text: string;
}

defineProps<IPropsType>();
</script>

<style scoped lang="scss">
.basic-buttons__wrap {
    margin-top: var(--margin-24);
    border-radius: var(--border-radius-6);
    box-shadow: 0 2px 8px var(--color-bs);
    background-color: var(--bg-card);



    .title {
        padding: var(--padding-20);
        font-size: var(--font-size-18);
        font-weight: 500;
        color: var(--color-text);
    }

    .slogan {
        font-weight: 500;
        text-transform: capitalize;
        color: var(--color-gray);
    }

    .line {
        width: 100%;
        height: 1px;
        background-color: var(--color-gray-light);
    }

    .basic-buttons__wrap--col {
        display: flex;

        .basic-buttons__wrap--row {
            padding: var(--padding-20);
            border-right: 1px solid var(--color-gray-light);

            &:last-of-type {
                border-right: none;
            }
        }
    }
}
</style>