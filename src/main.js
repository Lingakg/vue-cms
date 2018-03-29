// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//公共状态管理器Vuex
import store from './store.js'
//把ajax请求包引进来,并挂载到vue的原型上
import axios from 'axios'
axios.defaults.withCredentials = true
Vue.prototype.$ajax = axios
//把eleUI组件库引进来
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
