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
                    <component
                        :is="theme.theme === 'dark' ? Moon : Sun"
                        @click="handleActiveClick"
                    />
                </span>
            </template>
            <template #menu>
                <ul class="header-icon__sub">
                    <li @click="theme.setTheme(Theme.LIGHT)">
                        <Sun /> Light
                    </li>
                    <li @click="theme.setTheme(Theme.DARK)">
                        <Moon /> Dark
                    </li>
                </ul>
            </template>
        </VDropdown>
    </div>
</template>

<script setup lang="ts">
import { Positions } from '@/model/UI/basic/Dropdown.ts';
import VDropdown from '@/components/UI/basic/VDropdown.vue';
import Sun from '@/assets/icons/icons-header/sun.svg';
import Moon from '@/assets/icons/icons-header/moon.svg';
import { useTheme } from '@/store/useTheme.ts';
import { Theme } from '@/model/helpers.ts';
import { ref } from 'vue';
import { handleActive } from '@/plugins/Animation.ts';

const theme = useTheme();
const icon = ref<HTMLElement | null>(null);

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
        padding: 8px var(--padding-20);

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