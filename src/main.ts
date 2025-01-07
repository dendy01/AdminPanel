import App from '@/App.vue';
import router from '@/routes';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import i18n from '@/model/i18n.ts';

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(i18n).mount('#app');
