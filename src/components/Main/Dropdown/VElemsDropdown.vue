<template>
    <div class="dropdown">
        <div class="dropdown-container">
            <small class="slogan">Hidden arrow</small>
            <div class="dropdown-content btn-content">
                <VDropdown
                    :color="GlobalColors.PRIMARY"
                    :text="'Hidden arrow'"
                    :position="Positions.TOP_LEFT"
                >
                    <template #dropdown="{ toggle }">
                        <VButton
                            :color="GlobalColors.PRIMARY"
                            :icon-right="ArrowIcon"
                            @click="toggle"
                        >
                            Hidden arrow
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
                    :text="'Hover'"
                    :icon-right="ArrowIcon"
                    hover
                    :position="Positions.TOP_LEFT"
                >
                    <template #dropdown="{ toggle }">
                        <VButton
                            :color="GlobalColors.PRIMARY"
                            :icon-right="ArrowIcon"
                            @click="toggle"
                        >
                            Hover
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
                    :text="'With Icon'"
                    :icon-left="MenuIcon"
                    :icon-right="ArrowIcon"
                    :position="Positions.TOP_LEFT"
                >
                    <template #dropdown="{ toggle }">
                        <VButton
                            :color="GlobalColors.PRIMARY"
                            :icon-left="MenuIcon"
                            :icon-right="ArrowIcon"
                            @click="toggle"
                        >
                            With icon
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
                >
                    <template #dropdown="{ toggle }">
                        <VButton
                            round
                            is-icon
                            :color="GlobalColors.PRIMARY"
                            :icon-right="MoreIcon"
                            @click="toggle"
                        />
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
import MenuIcon from '@/assets/icons/icons-dropdown/menu.svg';
import MoreIcon from '@/assets/icons/icons-dropdown/more.svg';
import VButton from '@/components/UI/basic/VButton.vue';
import { Positions } from '@/model/UI/basic/Dropdown.ts';
</script>

<style scoped>
.dropdown {
    display: flex;

    padding: var(--padding-xxl);
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