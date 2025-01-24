<template>
    <div
        v-if="!isActive"
        class="header-search__wrapper"
    >
        <span
            class="header-search__menu"
            @click="isOpen.openMenu = !isOpen.openMenu"
        >
            <Menu />
        </span>
        <span
            @click="toggleInput"
            class="header-search"
        >
            <Search />
            <span class="header-search__text">Search (Ctrl+/)</span>
        </span>
    </div>
</template>

<script setup lang="ts">
import Menu from '@/assets/icons/icons-header/menu.svg';
import Search from '@/assets/icons/icons-header/search.svg';
import { useChecking } from '@/store/useCheck.ts';
import { ref } from 'vue';

const isActive = ref<boolean>(false);
const isOpen = useChecking();
const emit = defineEmits(['toggle-search']);

const toggleInput = () => {
    emit('toggle-search');
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.header-search__wrapper {
    display: flex;

    .header-search {
        display: flex;
        align-items: center;
        gap: 12px;

        cursor: pointer;

        .header-search__text {
            font-size: var(--font-size-16);
            font-weight: 400;
            color: var(--color-gray);
        }
    }
}

.header-search__menu {
    margin-right: var(--margin-12);
    display: none;
    cursor: pointer;
}

@media (max-width: $response-sw) {
    .header-search__menu {
        display: block;
    }
}
</style>