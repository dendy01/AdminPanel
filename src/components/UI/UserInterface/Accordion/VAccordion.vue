<template>
    <div class="wrapper">
        <div class="wrapper-accordion">
            <h5 class="title">
                Accordion
            </h5>

            <div class="wrapper-accordion__row">
                <div class="wrapper-accordion__col">
                    <small class="small-text">Basic Accordion</small>

                    <div
                        v-for="item in 3"
                        :key="item"
                    >
                        <p
                            class="wrapper-accordion__col--item"
                            :class="{ active: isActive }"
                            @click="isActive = !isActive"
                        >
                            Accordion Item 1 <Arrow />
                        </p>
                        <div
                            class="wrapper-accordion__col--content"
                            :style="{ display: isActive ? 'block' : 'none' }"
                        >
                            Hello world
                        </div>
                    </div>
                </div>

                <div class="wrapper-accordion__col">
                    <small class="small-text">Accordion Without Arrow</small>
                </div>
            </div>
        </div>

        <hr>

        <div>
            <h5 class="title">
                Customized Accordion
            </h5>
            <small class="small-text">Accordion Customized Button</small>
        </div>
    </div>
</template>

<script setup lang="ts">
import Arrow from '@/assets/icons/icons-accordion/arrow.svg';
import { ref } from 'vue';

const isActive = ref<boolean>(false);

// const accordion = ref([
//     {
//         id
//     }
// ])
</script>

<style scoped lang="scss">
.wrapper {
    padding: 30px 0;

    .wrapper-accordion__row {
        display: flex;
        justify-content: space-between;
        gap: 20px;

        .wrapper-accordion__col {
            width: 50%;
            border: 2px solid red;

            .wrapper-accordion__col--item {
                padding: 12px 20px;

                display: flex;
                justify-content: space-between;
                align-items: center;

                cursor: pointer;
                background: var(--color-white);
                border: 2px solid green;
            }

            .active {
                svg {
                    transform: rotate(180deg);
                }
            }

            .wrapper-accordion__col--content {
                display: none;
                padding: 0 20px 12px 20px;
            }
        }
    }

    hr {
        margin: 40px 0;
        border: 1px solid #ddd;
    }

    .title {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 20px;
        color: var(--color-dark);
    }

    .small-text {
        color: var(--color-gray);
    }
}
</style>