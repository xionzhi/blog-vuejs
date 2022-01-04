import { createApp } from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'

// http host
axios.defaults.baseURL = 'http://localhost:5001';

createApp(App).use(router).mount('#app')
