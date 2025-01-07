import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        welcome: 'Welcome to our application!'
    },
    ru: {
        welcome: 'Добро пожаловать в наше приложение!'
    }
};

const i18n = createI18n({
    locale: 'en',
    legacy: false,
    messages
});

export default i18n;