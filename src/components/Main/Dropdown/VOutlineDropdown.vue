<template>
    <div class="dropdown">
        <small class="slogan">{{ text }}</small>
        <div class="dropdown-content btn-content">
            <VDropdown
                v-for="variant in GlobalColors"
                :key="`${variant}_${Math.random}`"
                :color="variant"
                :text="variant"
                :icon-right="Arrow"
                outline
            >
                <VButton
                    :color="variant"
                    :icon-right="Arrow"
                >
                    {{ variant }}
                </VButton>
            </VDropdown>
        </div>
    </div>
</template>
<script setup lang="ts">
import { GlobalColors } from '@/GlobalColors.ts';
import VDropdown from '@/components/UI/basic/VDropdown.vue';
import Arrow from '@/assets/icons/icons-dropdown/arrow-down.svg';
import VButton from '@/components/UI/basic/VButton.vue';

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
    display: flex;
}
</style>