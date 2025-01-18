import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';
import { Theme } from '@/model/helpers.ts';
import { getLocalStorage, setLocalStorage } from '@/plugins/LocalStorage.ts';

export const useTheme = defineStore('theme', () => {
    const theme = ref<string>(getLocalStorage('theme') || '');

    const setTheme = (newTheme: string) => {
        theme.value = newTheme;

        if (newTheme === Theme.LIGHT) {
            document.body.classList.remove(Theme.DARK);
        } else {
            document.body.classList.add(Theme.DARK);
        }
        setLocalStorage('theme', newTheme);
    };

    onMounted(() => {
        const savedTheme = getLocalStorage('theme');

        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme(Theme.DARK);
        }
    });

    return {
        theme,
        setTheme
    };
});