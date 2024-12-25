<template>
    <div class="basic-buttons__wrap">
        <h5 class="title">
            {{ text }}
        </h5>
        <div class="basic-buttons__wrap--buttons">
            <div class="basic-buttons__wrap--col">
                <div
                    v-for="item in colText"
                    :key="item.id"
                    class="basic-buttons__wrap--row"
                >
                    <small class="slogan">{{ item.text }}</small>
                    <div>
                        <Button
                            v-for="btn in btnPrimary"
                            :key="btn.id"
                            :btn-type="btn.btnType"
                            :btn-size="btn.btnSize"
                            :icon="btn.icon"
                            :label="item.label"
                            :outline="item.outline"
                        >
                            {{ btn.content }}
                        </Button>
                    </div>
                    <div>
                        <Button
                            v-for="btn in btnPrimary"
                            :key="btn.id"
                            :btn-type="btn.btnType"
                            :btn-size="btn.btnSize"
                            :icon="btn.icon"
                            :round="'round'"
                            :label="item.label"
                            :outline="item.outline"
                        >
                            {{ btn.content }}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <hr class="line">
        <div class="basic-buttons__wrap--buttons">
            <div class="basic-buttons__wrap--col">
                <div
                    v-for="item in colText"
                    :key="item.id"
                    class="basic-buttons__wrap--row"
                >
                    <small class="slogan">{{ item.text }}</small>
                    <div>
                        <Button
                            v-for="btn in btnIcons"
                            :key="btn.id"
                            :btn-type="btn.btnType"
                            :btn-size="btn.btnSize"
                            :icon="btn.icon"
                            :round="btn.round"
                            :is-icon="true"
                            :label="item.label"
                            :outline="item.outline"
                        >
                            {{ btn.content }}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Check from '@/assets/icons/icons-buttons/check.svg';
import CheckboxCircle from '@/assets/icons/icons-buttons/checkbox-circle.svg';
import Notification from '@/assets/icons/icons-buttons/notification.svg';
import NotificationOnli from '@/assets/icons/icons-buttons/notificationOnliIcon.svg';
import Button from '@/components/UI/UserInterface/VButton.vue';
import { ref, shallowRef, useId } from 'vue';

interface BtnPrimary {
    id: string;
    btnType: string;
    btnSize: string;
    content?: string;
    round?: string;
    icon?: string;
}

interface IPropsType {
    text: string;
}

const colText = ref([
    {
        id: useId(),
        text: 'Basic'
    },
    {
        id: useId(),
        text: 'Label(Tonal)',
        label: 'label'
    },
    {
        id: useId(),
        text: 'Outline',
        outline: 'outline'
    }
]);

const btnPrimary = shallowRef<BtnPrimary[]>([
    {
        id: useId(),
        btnType: 'btn-primary',
        btnSize: 'medium',
        content: 'Primary',
        icon: CheckboxCircle
    },
    {
        id: useId(),
        btnType: 'btn-secondary',
        btnSize: 'medium',
        content: 'Secondary',
        icon: Notification
    }
]);

const btnIcons = shallowRef<BtnPrimary[]>([
    {
        id: useId(),
        btnType: 'btn-primary',
        btnSize: 'medium',
        icon: Check
    },
    {
        id: useId(),
        btnType: 'btn-secondary',
        btnSize: 'medium',
        icon: NotificationOnli
    },
    {
        id: useId(),
        btnType: 'btn-primary',
        btnSize: 'medium',
        icon: Check,
        round: 'round'
    },
    {
        id: useId(),
        btnType: 'btn-secondary',
        btnSize: 'medium',
        icon: NotificationOnli,
        round: 'round'
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
        padding: 20px;
        font-size: 18px;
        font-weight: 500;
        color: var(--color-text-dark);
    }

    .slogan {
        font-weight: 500;
        color: var(--color-gray);
    }

    .line {
        width: 100%;
        height: 1px;
        background: var(--color-gray-light);
    }

    .basic-buttons__wrap--col {
        display: flex;

        .basic-buttons__wrap--row {
            width: 33.33%;
            padding: 20px;
            border-right: 1px solid var(--color-gray-light);

            &:last-of-type {
                border-right: none;
            }
        }
    }
}
</style>