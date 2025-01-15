<template>
    <div class="basic-buttons__wrap">
        <h5 class="title">
            {{ text }}
        </h5>
        <div class="basic-buttons__wrap--buttons">
            <div class="basic-buttons__wrap--col">
                <VButtonsOnliIcons :text="'Basic'" />
                <VButtonsOnliIcons
                    :text="'Label(Tonal)'"
                    label
                />
            </div>
            <hr class="line">
            <div class="basic-buttons__wrap--col">
                <VButtonsSubIcons
                    icon
                    :text="'Extended Basic'"
                />
                <VButtonsSubIcons
                    :text="'Extended Label'"
                    label
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VButtonsOnliIcons from '@/components/Main/Buttons/VButtonsOnliIcons.vue';
import VButtonsSubIcons from '@/components/Main/Buttons/VButtonsSubIcons.vue';

interface IPropsType {
    text: string;
}

defineProps<IPropsType>();
</script>

<style scoped lang="scss">
.basic-buttons__wrap {
    margin-top: 24px;
    border-radius: 6px;
    box-shadow: 0 2px 8px var(--color-bs);
    background-color: var(--bg-card);



    .title {
        padding: 20px;
        font-size: 18px;
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
            width: 50%;
            padding: 20px;
            border-right: 1px solid var(--color-gray-light);

            &:last-of-type {
                border-right: none;
            }
        }
    }
}
</style>