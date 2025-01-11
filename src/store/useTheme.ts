import { defineStore } from 'pinia';
import { onMounted, ref, watch } from 'vue';

export const useTheme = defineStore('theme', () => {
    const theme = ref<string>(localStorage.getItem('theme') || 'light');

    const setTheme = (newTheme: string) => {
        theme.value = newTheme;
        document.body.className = newTheme;
    };

    onMounted(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme('light');
        }
    });

    watch(theme, (newTheme) => {
        localStorage.setItem('theme', newTheme);
        document.body.className = newTheme;
    });

    return {
        theme,
        setTheme
    };
});