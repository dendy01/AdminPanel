<template>

    <header class="header">
        <div class="container">
            <!-- <label
                class="header-search__wrap"
                :style="{ display: isActive ? 'block' : 'none' }"
            >
                <input
                    type="search"
                    class="header-search__input"
                    placeholder="Search..."
                    ref="inputSearch"
                >
                <Close
                    @click="isActive = false"
                    class="header-search__close"
                ></Close>
            </label> -->

            <VHeaderInput
                :isActive="isActive"
                @change-acitve="isActive = false"
            ></VHeaderInput>

            <div
                class="header-search"
                @click="changeActive"
            >
                <Search></Search>
                <span class="header-search__text">Search (Ctrl+/)</span>
            </div>

            <div class="header-icons">
                <ul class="header-icons__list">
                    <li
                        v-for="item in props"
                        class="header-icon"
                    >
                        <component :is="item.icon"></component>
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
import Search from "@/assets/icons/icons-header/search.svg";
import VHeaderInput from "@/components/Header/VHeaderInput.vue";
import { IHeaderGroup } from "@/model/layout/Header";
import { inject, ref } from "vue";

const props = inject<IHeaderGroup[]>("header");
const isActive = ref<boolean>(false);

const changeActive = () => {
    isActive.value = !isActive.value;
}
</script>

<style scoped lang="scss">
.header {
    color: var(--color-dark);
    background: var(--bg-primery);
    position: relative;

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
</style>