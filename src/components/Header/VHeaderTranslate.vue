<template>
    <div>
        <VDropdown
            :position="Positions.BOTTOM_RIGHT"
        >
            <template #dropdown="{ toggle }">
                <span
                    @click="toggle"
                    ref="icon"
                >
                    <TranslateIcon @click="handleActiveClick" />
                </span>
            </template>
            <template #menu>
                <ul class="header-icon__sub">
                    <li
                        @click="lang.setLang(TranslateAbbr.EN)"
                    >
                        {{ TranslateFull.EN }}
                    </li>
                    <li
                        @click="lang.setLang(TranslateAbbr.RU)"
                    >
                        {{ TranslateFull.RU }}
                    </li>
                </ul>
            </template>
        </VDropdown>
    </div>
</template>

<script setup lang="ts">
import { Positions } from '@/model/UI/basic/Dropdown.ts';
import VDropdown from '@/components/UI/basic/VDropdown.vue';
import { ref } from 'vue';
import { handleActive } from '@/plugins/Animation.ts';
import TranslateIcon from '@/assets/icons/icons-header/translate.svg';
import { TranslateFull, TranslateAbbr } from '@/model/helpers.ts';
import { useTranslate } from '@/store/useTranslate.ts';

const icon = ref<HTMLElement | null>(null);

const lang = useTranslate();

const handleActiveClick = (event: MouseEvent) => {
    if (icon.value) {
        handleActive(event, icon.value);
    }
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.header-icon__sub {

    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
        padding: var(--padding-md) var(--padding-xxl);
        text-transform: capitalize;

        display: flex;
        align-items: center;
        gap: 12px;

        white-space: nowrap;

        &:hover {
            background-color: var(--color-gray);
        }
    }
}
</style>