import { createApp, render } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'

createApp(App).mount('#app')

// Tạo ứng dụng Vue
const app = createApp(App)

// Sử dụng Vuetify
app.use(createVuetify())

// Mount ứng dụng với Vuetify vào một phần tử với id là 'app'
app.mount('#app')