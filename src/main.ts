import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Apply saved theme before mount to avoid flash of wrong theme
const saved = localStorage.getItem('theme')
if (saved !== 'light') document.documentElement.classList.add('dark')

createApp(App).use(router).mount('#root')
