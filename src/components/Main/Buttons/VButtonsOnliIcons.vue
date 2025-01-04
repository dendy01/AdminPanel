<template>
    <div class="basic-buttons__wrap--row">
        <small class="slogan">{{ text }}</small>
        <div>
            <Button
                v-for="variant in Object.values(GlobalColors)"
                :key="`${variant}_${Math.random}`"
                :btn-type="variant"
                :btn-size="ButtonSizes.MEDIUM"
                :icon="icons[variant]"
                is-icon
                :label="label"
                :outline="outline"
            />
            <Button
                v-for="variant in Object.values(GlobalColors)"
                :key="`${variant}_${Math.random}`"
                :btn-type="variant"
                :btn-size="ButtonSizes.MEDIUM"
                :icon="icons[variant]"
                round
                is-icon
                :label="label"
                :outline="outline"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import Check from '@/assets/icons/icons-buttons/check.svg';
import Notification from '@/assets/icons/icons-buttons/notification.svg';
import Button from '@/components/UI/basic/VButton.vue';
import { ButtonSizes } from '@/model/UI/basic/Button';
import { shallowRef } from 'vue';
import { GlobalColors } from '@/model/GlobalColors.ts';

interface IPropsType {
    text: string;
    label?: boolean;
    outline?: boolean;
}

defineProps<IPropsType>();

const icons = shallowRef({
    'primary': Check,
    'secondary': Notification,
    'success' : Notification,
    'danger' : Notification,
    'warning' : Notification,
    'info' : Notification,
    'dark' : Notification
});
</script>

<style scoped lang="scss">
.basic-buttons__wrap--row {
    width: 33.33%;
    padding: 20px;
    border-right: 1px solid var(--color-gray-light);

    &:last-of-type {
        border-right: none;
    }

    .slogan {
        font-weight: 500;
        text-transform: capitalize;
        color: var(--color-gray);
    }
}
</style>