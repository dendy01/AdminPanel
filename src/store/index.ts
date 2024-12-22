import { defineStore } from 'pinia';
import { ref } from 'vue';

export const isChecking = defineStore('checking', () => {
    const checking = ref<boolean>(false);
    const openMenu = ref<boolean>(false);

    return {
        checking,
        openMenu
    };
});