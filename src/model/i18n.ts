import { createI18n } from 'vue-i18n';

const messages  = {
    en: {
        i18nGlobal: {
            UserInterface: 'User Interface',
            Dashboards: 'Dashboards',
            ExtendedUI: 'Extended UI'
        }
    },
    ru: {
        i18nGlobal: {
            UserInterface: 'Интерфейс',
            Dashboards: 'Панель управления',
            ExtendedUI: 'Расширенный интерфейс'
        }
    }
};

const i18n = createI18n({
    locale: 'en',
    messages,
    legacy: false
});

export default i18n;