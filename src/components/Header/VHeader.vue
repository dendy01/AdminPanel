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
                        v-for="item in props"
                        :key="item.id"
                        class="header-icon"
                        :class="{ active: changeActiveModal(item.id) }"
                        @click="isId(item.id)"
                        ref="activeUl"
                    >
                        <component :is="item.icon" />

                        <ul class="header-icon__sub">
                            <li
                                v-for="elem in item.group"
                                :key="elem.id"
                                @click="theme.setTheme(elem.content.toLowerCase())"
                            >
                                <component :is="elem.icon" /> {{ elem.content }}
                            </li>
                        </ul>
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
import { useTheme } from '@/store/useTheme.ts';
import VHeaderSearch from '@/components/Header/VHeaderSearch.vue';

const theme = useTheme();
const props = inject<IHeaderGroup[]>('header');
const isActive = ref<boolean>(false);
const isScrolling = ref<boolean>(false);
const currentId = ref<string | null>(null);
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

const isId = (id: string) => {
    currentId.value = currentId.value === id ? null : id;
};

const changeActiveModal = (id: string) => {
    return currentId.value === id;
};

const eventActive = (event: any) => {
    if (activeUl.value) {
        activeUl.value.forEach((item: any) => {
            if(!item.contains(event.target)) {
                item.classList.remove('active');
            }
        });
    }
};

onMounted(() => {
    document.body.addEventListener('click', eventActive);
    window.addEventListener('scroll', changeScroll);
});

onUnmounted(() => {
    document.body.removeEventListener('click', eventActive);
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
    transition: padding $transition-time $transition-duration;

    .header-search__wrapper {
        display: flex;

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
                position: relative;

                .header-icon__sub {
                    display: none;
                }
            }

            .active .header-icon__sub {
                padding: 8px 0;
                border-radius: 8px;

                display: flex;
                flex-direction: column;
                gap: 12px;

                position: absolute;
                right: 0;

                background-color: var(--bg-primary);
                box-shadow: 0 2px 4px var(--color-bs);

                li {
                    padding: 8px 20px;

                    display: flex;
                    align-items: center;
                    gap: 12px;

                    white-space: nowrap;

                    &:hover {
                        background-color: var(--color-gray);
                    }
                }
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
    margin-right: 12px;
    display: none;
    cursor: pointer;
}

.header-observer {
    opacity: .96;
    padding: 0 16px;
    background-color: var(--bg-card);
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 4px var(--color-bs);
    transition: padding $transition-time $transition-duration;
}

@media (max-width: $response-sw) {
    .header-search__menu {
        display: block;
    }
}
</style>