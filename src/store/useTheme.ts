import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';

export const useTheme = defineStore('theme', () => {
    const theme = ref<string>(localStorage.getItem('theme') || 'light');

    const setTheme = (newTheme: string) => {
        theme.value = newTheme;
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    };

    onMounted(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme('light');
        }
    });

    return {
        theme,
        setTheme
    };
});