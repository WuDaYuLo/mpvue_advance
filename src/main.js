import Vue from 'vue'
import App from './App.vue'

// 关闭vue开发中一些提示的功能
Vue.prototype.productionTip = false

// 声明当前的组件为整个应用
App.mpType = 'app'

// 生成当前应用的实例

const app = new Vue()

// 挂载当前应用的实例
app.$mount()

