<template>

    <header class="header">
        <div class="container">
            <div>
                <i class="ri-search-line"></i>
            </div>

            <div class="header-icons">
                <ul>
                    <li v-for="item in props">
                        <component :is="item.icon"></component>
                    </li>
                </ul>

                <!-- <Translate></Translate>
                <Sun></Sun>
                <Moon></Moon>
                <Computer></Computer>
                <Star></Star>
                <Notification></Notification>
                <img
                    src="../assets/icons/profile.png"
                    alt="profile"
                    class="header-icom__person"
                > -->
            </div>
        </div>
    </header>

</template>

<script setup lang="ts">
import { IHeaderGroup } from "@/model/layout/Header";
import { inject } from "vue";

const props = inject<IHeaderGroup[]>("header");
</script>

<style scoped lang="scss">
.header {
    border: 2px solid red;
    color: var(--color-dark);

    .icon {
        font-size: 20px;
    }

    .header-icom__person {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .container {
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header-icons {
        display: flex;
        align-items: center;

        i {
            padding: 10px;
        }
    }
}
</style>