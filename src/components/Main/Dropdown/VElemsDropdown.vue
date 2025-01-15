<template>
    <div class="dropdown">
        <div class="dropdown-container">
            <small class="slogan">Hidden arrow</small>
            <div class="dropdown-content btn-content">
                <VDropdown
                    :color="GlobalColors.PRIMARY"
                    :text="'Hidden arrow'"
                >
                    <template #dropdown="{ toggle }">
                        <VButton
                            :color="GlobalColors.PRIMARY"
                            :icon-right="Arrow"
                            @click="toggle"
                        >
                            Hidden arrow
                        </VButton>
                    </template>
                    <template #menu>
                        <ul>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
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
                    :icon-right="Arrow"
                    hover
                >
                    <template #dropdown="{ toggle }">
                        <VButton
                            :color="GlobalColors.PRIMARY"
                            :icon-right="Arrow"
                            @click="toggle"
                        >
                            Hover
                        </VButton>
                    </template>
                    <template #menu>
                        <ul>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
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
                    :icon-left="Menu"
                    :icon-right="Arrow"
                >
                    <template #dropdown="{ toggle }">
                        <VButton
                            :color="GlobalColors.PRIMARY"
                            :icon-right="Arrow"
                            @click="toggle"
                        >
                            With icon
                        </VButton>
                    </template>
                    <template #menu>
                        <ul>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
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
                    :icon-right="More"
                >
                    <template #dropdown="{ toggle }">
                        <VButton
                            round
                            is-icon
                            :color="GlobalColors.PRIMARY"
                            :icon-right="Arrow"
                            @click="toggle"
                        />
                    </template>
                    <template #menu>
                        <ul>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
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
import Arrow from '@/assets/icons/icons-dropdown/arrow-down.svg';
import Menu from '@/assets/icons/icons-dropdown/menu.svg';
import More from '@/assets/icons/icons-dropdown/more.svg';
import VButton from '@/components/UI/basic/VButton.vue';
</script>

<style scoped>
.dropdown {
    display: flex;

    padding: 20px;
}

.dropdown-content {
    padding-top: 16px;

    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.dropdown-container {
    width: 25%;
}
</style>