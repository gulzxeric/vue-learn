import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// 先把 app 存到变量
const app = createApp(App)

// 安装路由器
app.use(router)

app.use(createPinia())

// 最后挂载
app.mount('#app')