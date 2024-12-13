import { createApp } from 'vue';
import '@/style/style.scss';
import App from '@/App.vue';
import router from '@/routes';

createApp(App).use(router).mount('#app');
