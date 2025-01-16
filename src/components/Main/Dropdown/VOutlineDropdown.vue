<template>
    <div class="dropdown">
        <small class="slogan">{{ text }}</small>
        <div class="dropdown-content btn-content">
            <VDropdown
                v-for="variant in Object.values(GlobalColors)"
                :key="`${variant}_${Math.random}`"
                :position="Positions.TOP_LEFT"
            >
                <template #dropdown="{ toggle }">
                    <VButton
                        outline
                        :color="variant"
                        :icon-right="Arrow"
                        @click="toggle"
                    >
                        {{ variant }}
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
</template>
<script setup lang="ts">
import { GlobalColors } from '@/GlobalColors.ts';
import VDropdown from '@/components/UI/basic/VDropdown.vue';
import Arrow from '@/assets/icons/icons-dropdown/arrow-down.svg';
import VButton from '@/components/UI/basic/VButton.vue';
import { Positions } from '@/model/UI/basic/Dropdown.ts';

interface IPropsType {
    text: string;
}

defineProps<IPropsType>();
</script>

<style scoped>
.dropdown {
    padding: 20px;
}

.dropdown-content {
    color: var(--color-text);
    padding-top: 16px;

    display: flex;
    gap: 8px;

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
</style>