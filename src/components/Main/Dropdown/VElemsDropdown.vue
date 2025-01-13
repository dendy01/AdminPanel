<template>
    <div class="dropdown">
        <div class="dropdown-container">
            <small class="slogan">Hidden arrow</small>
            <div class="dropdown-content btn-content">
                <VDropdown
                    :color="GlobalColors.PRIMARY"
                    :text="'Hidden arrow'"
                />
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
                    dropdown-bottom
                />
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
                    dropdown-bottom
                />
            </div>
        </div>
        <div class="dropdown-container">
            <small class="slogan">Icon Dropdown</small>
            <div class="dropdown-content btn-content">
                <VDropdown
                    :color="GlobalColors.PRIMARY"
                    :icon-right="More"
                    round
                    is-icon
                    dropdown-right
                    dropdown-bottom
                />
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
</script>

<style scoped>
.dropdown {
    display: flex;

    padding: 20px;
}

.dropdown-content {
    padding-top: 16px;

    display: flex;
    gap: 8px;
}

.dropdown-container {
    width: 25%;
}
</style>