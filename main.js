import Vue from 'vue';
import App from './App';
// 弹出框
import DialogBox from './components/DialogBox/DialogBox';

// main.js


Vue.prototype.$basePath = process.env.VUE_APP_BASE_PATH || "";

Vue.config.productionTip = false

// 全局组件
Vue.component('DialogBox', DialogBox);
//mescroll
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
