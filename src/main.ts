import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import routers from './routers/index' // Importa Rotas
import { createPinia } from 'pinia' // Importa função para fazer o pinia funcionar

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(routers)

app.mount('#app')