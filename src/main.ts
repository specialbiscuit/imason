import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

const app = createApp(App)
app.use(router)
// app.use(ElementPlus)
const win: any = window
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
    console.log(111111)
    win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
  }
}


app.mount('#app')
