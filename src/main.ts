import { createApp, toRaw } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './index.css';
import 'animate.css';
import { createPinia, PiniaPluginContext } from 'pinia'
import { TroisJSVuePlugin } from 'troisjs';

// 数据存储本地
const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
// 获取本地数据
const getStorage = (key: string) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : {};
}

const piniaPlugin = (context: PiniaPluginContext) => {
  const { store } = context;
  // $subscribe state值发生变化时会执行传入的回调
  store.$subscribe(() => {
      // 每次修改值的时候更新localStorage数据
      setStorage(`pinia-${store.$id}`, toRaw(store.$state))
  })
  // 每次构建项目的时候从本地存储取值
  const data = getStorage(`pinia-${store.$id}`)
  // 并将取的值赋给state
  return {
      ...data
  }
}

const pinia = createPinia()
pinia.use(piniaPlugin)

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.use(TroisJSVuePlugin)

const win: any = window
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
    console.log(111111)
    win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
  }
}


app.mount('#app')
