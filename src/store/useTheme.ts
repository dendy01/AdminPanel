import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';
import { Theme } from '@/model/helpers.ts';

export const useTheme = defineStore('theme', () => {
    const theme = ref<string>(localStorage.getItem('theme') || '');

    const setTheme = (newTheme: string) => {
        theme.value = newTheme;

        if (newTheme === Theme.LIGHT) {
            document.body.classList.remove(Theme.DARK);
        } else {
            document.body.classList.add(Theme.DARK);
        }
        localStorage.setItem('theme', newTheme);
    };

    onMounted(() => {
        const savedTheme = localStorage.getItem('theme');

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