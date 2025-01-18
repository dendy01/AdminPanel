import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';
import { Translate } from '@/model/helpers.ts';
import { useI18n } from 'vue-i18n';
import { getLocalStorage, setLocalStorage } from '@/plugins/LocalStorage.ts';

export const useTranslate = defineStore('lang', () => {
    const lang = ref<string>(getLocalStorage('lang') || '');
    const {
        locale
    } = useI18n();

    const setLang = (newLang: string) => {
        lang.value = newLang;

        locale.value = newLang;
        setLocalStorage('lang', newLang);
    };

    onMounted(() => {
        const savedLang = getLocalStorage('lang');

        if (savedLang) {
            setLang(savedLang);
        } else {
            setLang(Translate.en);
        }
    });

    return {
        lang,
        setLang
    };
});