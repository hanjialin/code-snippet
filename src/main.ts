import { createApp } from 'vue'
import AppProvider from '@/components/AppProvider/AppProvider.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css'
import { createMetaManager } from 'vue-meta'
const app = createApp(AppProvider)
app.use(router)
app.use(createMetaManager())
app.use(createPinia())

app.mount('#app')
