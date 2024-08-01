import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import Toast from 'vue-toastification'
// import 'vue-toastification/dist/index.css'
import './assets/main.scss'
import '@fortawesome/fontawesome-free/css/all.css';


const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(Toast, {
//   toastClassName: 'dashcode-toast',
//   bodyClassName: 'dashcode-toast-body'
// })
app.mount('#app')
