<template>
    <header
        class="header"
        :class="{ 'header-observer': isScrolling }"
        ref="myHeader"
    >
        <div class="container">
            <VHeaderInput
                v-if="isActive"
                :is-active="isActive"
                :is-scrolling="isScrolling"
                @change-active="changeActive"
            />

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
                    @click="changeInput"
                    class="header-search"
                >
                    <Search />
                    <span class="header-search__text">Search (Ctrl+/)</span>
                </span>
            </div>

            <div
                class="header-icons"
                v-if="!isActive"
            >
                <ul class="header-icons__list">
                    <li
                        v-for="item in props"
                        :key="item.id"
                        class="header-icon"
                    >
                        <component :is="item.icon" />
                    </li>
                    <img
                        src="@/assets/icons/icons-header/profile.png"
                        alt="profile"
                        class="header-icons__list--profile"
                    >
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import Menu from '@/assets/icons/icons-header/menu.svg';
import Search from '@/assets/icons/icons-header/search.svg';
import VHeaderInput from '@/components/Header/VHeaderInput.vue';
import { IHeaderGroup } from '@/model/layout/Header';
import { isChecking } from '@/store';
import { inject, onMounted, onUnmounted, ref } from 'vue';

const props = inject<IHeaderGroup[]>('header');
const isActive = ref<boolean>(false);
const isScrolling = ref<boolean>(false);
const isOpen = isChecking();

const changeActive = (active: boolean) => {
    isActive.value = active;
};

const changeScroll = () => {
    isScrolling.value = window.scrollY > 0;
};

const changeInput = () => {
    isActive.value = !isActive.value;
};

onMounted(() => {
    window.addEventListener('scroll', changeScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', changeScroll);
});
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    color: var(--color-dark);
    background: var(--bg-primery);
    position: sticky;
    top: 0;
    left: 0;

    .header-search__wrapper {
        display: flex;

        .header-search__menu {
            margin-right: 12px;
            display: none;
            cursor: pointer;
        }

        .header-search {
            display: flex;
            align-items: center;
            gap: 12px;

            cursor: pointer;

            .header-search__text {
                font-size: 16px;
                font-weight: 400;
                color: var(--color-gray);
            }
        }
    }

    .container {
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header-icons {
        .header-icons__list {
            display: flex;
            align-items: center;

            .header-icon {
                padding: 8px;
                cursor: pointer;
            }

            .header-icons__list--profile {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                cursor: pointer;
            }
        }
    }
}

.header-observer {
    opacity: .9;
    padding: 0 16px;
    background: var(--color-white);
    border-radius: 0 0 8px 8px;
}
</style>