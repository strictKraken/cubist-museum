import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {imgToSvg} from '@/assets/js/imgToSvg.js'


createApp(App).use(router).mount('#app')
imgToSvg();