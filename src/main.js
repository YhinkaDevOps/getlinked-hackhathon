import './assets/main.css'
import style from './index.css'
import { RouterLink } from 'vue-router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(style)
app.use(RouterLink)
app.mount('#app')
