import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

import App from './App.vue'
import router from './router'
// import Toast from 'vue-toastification'
// import 'vue-toastification/dist/index.css'
import './assets/main.scss'
import '@fortawesome/fontawesome-free/css/all.css';

const pinia = createPinia();

pinia.use(piniaPluginPersistedState)
const app = createApp(App)

app.use(pinia)
app.use(router)
// app.use(Toast, {
//   toastClassName: 'dashcode-toast',
//   bodyClassName: 'dashcode-toast-body'
// })
app.mount('#app')
