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

            <VHeaderSearch
                v-if="!isActive"
                @toggle-search="changeInput"
            />

            <div
                class="header-icons"
                v-if="!isActive"
            >
                <ul class="header-icons__list">
                    <li
                        class="header-icon"
                        ref="activeUl"
                    >
                        <VHeaderTranslate />
                    </li>
                    <li
                        class="header-icon"
                        ref="activeUl"
                    >
                        <VHeaderTheme />
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
import VHeaderInput from '@/components/Header/VHeaderInput.vue';
import { IHeaderGroup } from '@/model/layout/Header';
import { inject, onMounted, onUnmounted, ref } from 'vue';
import VHeaderSearch from '@/components/Header/VHeaderSearch.vue';
import VHeaderTheme from '@/components/Header/VHeaderTheme.vue';
import VHeaderTranslate from '@/components/Header/VHeaderTranslate.vue';

inject<IHeaderGroup[]>('header');
const isActive = ref<boolean>(false);
const isScrolling = ref<boolean>(false);
const activeUl = ref<HTMLElement[] | null>(null);

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
@import '@/style/variables.scss';

.header {
    width: 100%;
    color: var(--color-text);
    background-color: var(--bg-primary);
    position: sticky;
    z-index: 1000;
    top: 0;
    left: 0;
    transition: padding var(--duration) var(--timing-function);

    .header-search__wrapper {
        display: flex;

        .header-search {
            display: flex;
            align-items: center;
            gap: 12px;

            cursor: pointer;

            .header-search__text {
                font-size: var(--font-size-xl);
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
                padding: var(--padding-md);
                cursor: pointer;
                position: relative;
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

.header-search__menu {
    margin-right: var(--margin-lg);
    display: none;
    cursor: pointer;
}

.header-observer {
    opacity: .96;
    padding: 0 var(--padding-xl);
    background-color: var(--bg-card);
    border-radius: 0 0 var(--border-radius-xl) var(--border-radius-xl);
    box-shadow: 0 2px 4px var(--color-bs);
    transition: padding var(--duration) var(--timing-function);
}

@media (max-width: $response-sw) {
    .header-search__menu {
        display: block;
    }
}
</style>