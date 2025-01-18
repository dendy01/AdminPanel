import { createI18n } from 'vue-i18n';

const messages  = {
    en: {
        UserInterface: 'User Interface',
        Dashboards: 'Dashboards'
    },
    ru: {
        UserInterface: 'Интерфейс',
        Dashboards: 'Панель управления'
    }
};

const i18n = createI18n({
    locale: 'en',
    messages,
    legacy: false
});

export default i18n;