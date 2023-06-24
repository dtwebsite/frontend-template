import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import { createStore } from 'vuex';
import auth from './store/auth';
import './assets/tailwind.css';
import { createI18n } from 'vue-i18n';
import en from './locales/en.js';
import zh from './locales/zh.js';

// 設定預設的基本 URL
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

// 設定攔截器
axios.interceptors.request.use(
  config => {
    // 在每個請求中，向 header 加入 Authorization 標頭，值為 "Bearer <token>"
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // 檢查回應狀態碼，例如 401 (未經授權) 或 403 (禁止存取)
    if (error.response.status === 401 || error.response.status === 403) {
      // 在此處理未經授權的錯誤，例如重新導向到登入頁面
      // 或顯示一個錯誤訊息等等
    }
    return Promise.reject(error);
  }
);

const store = createStore({
  modules: {
    auth, // 將 auth 模組添加到 Vuex 儲存庫中
  },
});

const i18n = createI18n({
  locale: 'zh', // 默認語言
  messages: {
    zh,
    en,
  },
});

createApp(App).use(store).use(router).use(i18n).mount('#app');