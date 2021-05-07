// import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App).use(router).use(VueAxios, axios)
installElementPlus(app)
app.mount('#app')