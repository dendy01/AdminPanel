<template>
    <div class="basic-buttons__wrap--row">
        <small class="slogan">{{ text }}</small>
        <div class="btn-content">
            <Button
                v-for="variant in Object.values(GlobalColors)"
                :key="`${variant}_${Math.random}`"
                :color="variant"
                :btn-size="ButtonSizes.MEDIUM"
                :icon-left="icons[variant]"
                :label="label"
                :outline="outline"
            >
                {{ variant }}
            </Button>
        </div>
        <div class="btn-content">
            <Button
                v-for="variant in Object.values(GlobalColors)"
                :key="`${variant}_${Math.random}`"
                :color="variant"
                :btn-size="ButtonSizes.MEDIUM"
                :icon-left="icons[variant]"
                round
                :label="label"
                :outline="outline"
            >
                {{ variant }}
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import CheckIcon from '@/assets/icons/icons-buttons/check.svg';
import CheckboxCircleIcon from '@/assets/icons/icons-buttons/checkbox-circle.svg';
import NotificationIcon from '@/assets/icons/icons-buttons/notification.svg';
import Button from '@/components/UI/basic/VButton.vue';
import { ButtonSizes } from '@/model/UI/basic/Button';
import { shallowRef } from 'vue';
import { GlobalColors } from '@/GlobalColors.ts';

interface IPropsType {
    text: string;
    label?: boolean;
    outline?: boolean;
    icon?: boolean;
}

const props = defineProps<IPropsType>();

const icons = shallowRef({
    'primary': props.icon ? CheckIcon : CheckboxCircleIcon,
    'secondary': NotificationIcon,
    'success' : NotificationIcon,
    'danger' : NotificationIcon,
    'warning' : NotificationIcon,
    'info' : NotificationIcon,
    'dark' : NotificationIcon
});
</script>

<style scoped lang="scss">
.basic-buttons__wrap--row {
    width: 33.33%;
    padding: var(--padding-xxl);
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