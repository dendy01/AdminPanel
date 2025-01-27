<template>
    <div class="dropdown">
        <div class="dropdown-container">
            <small class="slogan">Hidden arrow</small>
            <div class="dropdown-content btn-content">
                <VDropdown
                    :color="GlobalColors.PRIMARY"
                    :position="Positions.BOTTOM_LEFT"
                >
                    <template #dropdown="{ toggle }">
                        <VButton
                            :color="GlobalColors.PRIMARY"
                            :icon-right="ArrowIcon"
                            @click="toggle"
                        >
                            Dropdown
                        </VButton>
                    </template>
                    <template #menu>
                        <ul class="dropdown-menu__wrap">
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li class="line-wrap">
                                <hr class="line">
                            </li>
                            <li>Hello dropdown</li>
                        </ul>
                    </template>
                </VDropdown>
            </div>
        </div>
        <div class="dropdown-container">
            <small class="slogan">On Hover</small>
            <div class="dropdown-content btn-content">
                <VDropdown
                    :color="GlobalColors.PRIMARY"
                    :position="Positions.TOP_LEFT"
                    right
                >
                    <template #dropdown="{ toggle }">
                        <VButton
                            :color="GlobalColors.PRIMARY"
                            :icon-right="ArrowRightIcon"
                            @click="toggle"
                        >
                            Dropend
                        </VButton>
                    </template>
                    <template #menu>
                        <ul class="dropdown-menu__wrap">
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li class="line-wrap">
                                <hr class="line">
                            </li>
                            <li>Hello dropdown</li>
                        </ul>
                    </template>
                </VDropdown>
            </div>
        </div>
        <div class="dropdown-container">
            <small class="slogan">With Icon</small>
            <div class="dropdown-content btn-content">
                <VDropdown
                    :color="GlobalColors.PRIMARY"
                    :position="Positions.TOP_RIGHT"
                >
                    <template #dropdown="{ toggle }">
                        <VButton
                            :color="GlobalColors.PRIMARY"
                            :icon-right="ArrowUpIcon"
                            @click="toggle"
                        >
                            Dropup
                        </VButton>
                    </template>
                    <template #menu>
                        <ul class="dropdown-menu__wrap">
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li class="line-wrap">
                                <hr class="line">
                            </li>
                            <li>Hello dropdown</li>
                        </ul>
                    </template>
                </VDropdown>
            </div>
        </div>
        <div class="dropdown-container">
            <small class="slogan">Icon Dropdown</small>
            <div class="dropdown-content btn-content">
                <VDropdown
                    :color="GlobalColors.PRIMARY"
                    :icon-right="MoreIcon"
                    :position="Positions.TOP_LEFT"
                    left
                >
                    <template #dropdown="{ toggle }">
                        <VButton
                            :color="GlobalColors.PRIMARY"
                            :icon-left="ArrowLeftIcon"
                            @click="toggle"
                        >
                            Dropstart
                        </VButton>
                    </template>
                    <template #menu>
                        <ul class="dropdown-menu__wrap">
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li class="line-wrap">
                                <hr class="line">
                            </li>
                            <li>Hello dropdown</li>
                            <li>Hello dropdown</li>
                            <li>Hello dropdown</li>
                        </ul>
                    </template>
                </VDropdown>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { GlobalColors } from '@/GlobalColors.ts';
import VDropdown from '@/components/UI/basic/VDropdown.vue';
import ArrowIcon from '@/assets/icons/icons-dropdown/arrow-down.svg';
import MoreIcon from '@/assets/icons/icons-dropdown/more.svg';
import VButton from '@/components/UI/basic/VButton.vue';
import { Positions } from '@/model/UI/basic/Dropdown.ts';
import ArrowUpIcon from '@/assets/icons/icons-dropdown/arrow-up.svg';
import ArrowRightIcon from '@/assets/icons/icons-dropdown/arrow-right.svg';
import ArrowLeftIcon from '@/assets/icons/icons-dropdown/arrow-left.svg';
</script>

<style scoped>
.dropdown {
    display: flex;

    padding: 0 var(--padding-xxl) var(--padding-xxl) var(--padding-xxl);
}

.dropdown-content {
    color: var(--color-text);
    padding-top: 16px;

    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    .dropdown-menu__wrap {

        .line-wrap {
            padding: 8px 0;

            &:hover {
                background: none;
            }
        }

        li {
            padding: 8px 16px;
            white-space: nowrap;
            cursor: pointer;

            &:hover {
                background-color: var(--color-gray);
            }
        }
    }
}

.dropdown-container {
    width: 25%;
}
</style>