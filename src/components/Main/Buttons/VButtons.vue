<template>
    <div class="buttons__wrap">
        <VBasicDefaultButtons :text="'Basic Buttons'" />
        <VBasicDefaultButtons
            :text="'Label(Tonal) Buttons'"
            :label="'label'"
        />
        <VBasicDefaultButtons
            :text="'Outline Buttons'"
            :outline="'outline'"
        />
        <VBasicDefaultButtons
            :text="'Text Buttons'"
            :btn-text="'btn-text'"
        />
        <VButtonsIcons :text="'Buttons with Icons'" />
    </div>
</template>

<script setup lang="ts">
import VBasicDefaultButtons from './VBasicDefaultButtons.vue';
import VButtonsIcons from './VButtonsIcons.vue';
</script>