<template>
    <div class="basic-buttons__wrap">
        <h5 class="title">
            {{ text }}
        </h5>
        <div class="basic-buttons__wrap--buttons">
            <div class="basic-buttons__wrap--col">
                <VButtonsSubIcons :text="'Basic'" />
                <VButtonsSubIcons
                    :text="'Label(Tonal)'"
                    label
                />
                <VButtonsSubIcons
                    :text="'Outline'"
                    outline
                />
            </div>
            <hr class="line">
            <div class="basic-buttons__wrap--col">
                <VButtonsOnliIcons :text="'Basic'" />
                <VButtonsOnliIcons
                    :text="'Label(Tonal)'"
                    label
                />
                <VButtonsOnliIcons
                    :text="'Outline'"
                    outline
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

    .line {
        width: 100%;
        height: 1px;
        background-color: var(--color-gray-light);
    }

    .basic-buttons__wrap--col {
        display: flex;
    }
}
</style>