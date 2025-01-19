<template>
    <div class="buttons__wrap">
        <VBasicDefaultButtons :text="'Basic Buttons'" />
        <VBasicDefaultButtons
            :text="'Label(Tonal) Buttons'"
            label
        />
        <VBasicDefaultButtons
            :text="'Outline Buttons'"
            outline
        />
        <VBasicDefaultButtons
            :text="'Text Buttons'"
            btn-text
        />
        <VButtonsIcons :text="'Buttons with Icons'" />
        <VButtonsAction :text="'Floating Action Buttons'" />
        <VButtonsOptions :text="'Button Options'" />
    </div>
</template>

<script setup lang="ts">
import VBasicDefaultButtons from '@/components/Main/Buttons/VBasicDefaultButtons.vue';
import VButtonsAction from '@/components/Main/Buttons/VButtonsAction.vue';
import VButtonsIcons from '@/components/Main/Buttons/VButtonsIcons.vue';
import VButtonsOptions from '@/components/Main/Buttons/VButtonsOptions.vue';
</script>

<style scoped>
.buttons__wrap:last-child {
    margin-bottom: 20px;
}
</style>