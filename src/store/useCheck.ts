import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useChecking = defineStore('checking', () => {
    const checking = ref<boolean>(false);
    const openMenu = ref<boolean>(false);
    const responseSl = ref<number>(567);
    const responseSx = ref<number>(767);
    const responseSw = ref<number>(1199);

    return {
        checking,
        openMenu,
        responseSl,
        responseSx,
        responseSw
    };
});