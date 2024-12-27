<template>
    <div class="basic-buttons__wrap--row">
        <small class="slogan">{{ text }}</small>
        <div>
            <Button
                v-for="variant in Object.values(ButtonTypesIcons)"
                :key="`${variant}_${Math.random}`"
                :btn-type="variant"
                :btn-size="ButtonSizes.MEDIUM"
                :icon="icons[variant]"
                :label="label"
                :outline="outline"
            >
                <span class="btn-text-capit">
                    {{ variant }}
                </span>
            </Button>
        </div>
        <div>
            <Button
                v-for="variant in Object.values(ButtonTypesIcons)"
                :key="`${variant}_${Math.random}`"
                :btn-type="variant"
                :btn-size="ButtonSizes.MEDIUM"
                :icon="icons[variant]"
                round
                :label="label"
                :outline="outline"
            >
                <span class="btn-text-capit">
                    {{ variant }}
                </span>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Check from '@/assets/icons/icons-buttons/check.svg';
import CheckboxCircle from '@/assets/icons/icons-buttons/checkbox-circle.svg';
import Notification from '@/assets/icons/icons-buttons/notification.svg';
import Button from '@/components/UI/basic/VButton.vue';
import { ButtonSizes, ButtonTypesIcons } from '@/model/UI/basic/Button';
import { shallowRef } from 'vue';

interface IPropsType {
    text: string;
    label?: boolean;
    outline?: boolean;
    icon?: boolean;
}

const props = defineProps<IPropsType>();

const icons = shallowRef({
    'primary': props.icon ? Check : CheckboxCircle,
    'secondary': Notification
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

    .btn-text-capit {
        text-transform: capitalize;
    }
}
</style>