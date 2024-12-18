<template>
    <label
        class="header-search__wrap"
        :style="{ display: isActive ? 'block' : 'none' }"
    >
        <input
            type="text"
            class="header-search__input"
            placeholder="Search..."
            ref="inputSearch"
        >
        <Close
            @click="setActive"
            class="header-search__close"
        ></Close>
    </label>
</template>

<script setup lang="ts">
import Close from "@/assets/icons/icons-header/close.svg";
import { onMounted, useTemplateRef } from 'vue';

interface IPropsType {
    isActive: boolean;
}

defineProps<IPropsType>();
const emit = defineEmits(["changeAcitve"]);
const inputSearch = useTemplateRef("inputSearch");

const setActive = () => {
    emit("changeAcitve", false);
}

onMounted(() => {

    if (inputSearch.value) {
        inputSearch.value.focus();
    }

})
</script>

<style lang="scss">
.header-search__wrap {
    height: 100%;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    .header-search__input {
        height: 100%;
        width: 100%;
        font-size: 16px;
        color: var(--color-dark);

        position: absolute;
        top: 0;
        left: 0;

        background: var(--bg-primery);
    }

    .header-search__input::placeholder {
        font-size: 16px;
    }

    .header-search__close {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }
}
</style>