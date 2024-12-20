<template>
    <div
        class="observer"
        ref="myObserver"
    ></div>
    <header
        class="header"
        ref="myHeader"
    >
        <div class="container">
            <VHeaderInput
                v-if="isActive"
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
import { inject, onMounted, ref } from "vue";

const props = inject<IHeaderGroup[]>("header");
const isActive = ref<boolean>(false);
const myObserver = ref<HTMLElement | null>(null);
const myHeader = ref<HTMLElement | null>(null);

const options = {
    rootMargin: "0px",
    threshold: 1.0,
};

const callback = function (entries: any) {

    if (myHeader.value) {
        if (!entries[0].isIntersecting) {
            myHeader.value.classList.add("header-observer");
        } else {
            myHeader.value.classList.remove("header-observer");
        }
    }

};

const observer = new IntersectionObserver(callback, options);

const changeActive = () => {
    isActive.value = !isActive.value;
};

onMounted(() => {
    if (myObserver.value && myHeader.value) {
        observer.observe(myObserver.value);
    }
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

.header-observer {
    opacity: .9;
    padding: 0 16px;
    background: var(--color-white);
    border-radius: 0 0 8px 8px;
}
</style>