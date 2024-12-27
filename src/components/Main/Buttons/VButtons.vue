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
    </div>
</template>

<script setup lang="ts">
import VBasicDefaultButtons from './VBasicDefaultButtons.vue';
import VButtonsAction from './VButtonsAction.vue';
import VButtonsIcons from './VButtonsIcons.vue';
</script>