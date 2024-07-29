
import { registerPlugins } from '@/plugins'
import './plugins/axios'
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
