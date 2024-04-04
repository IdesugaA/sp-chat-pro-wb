import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'

Vue.prototype.$axios = axios;//把axios挂载到vue上

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
