import App from './App'

//全局挂载接口
import {
	myRequest
} from './util/api.js'
Vue.prototype.$myRequest = myRequest

//全局过滤器
Vue.filter('formatDate', (date) => {
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = nDate.getMonth().toString().padStart(2, 0)
	const day = nDate.getDay().toString().padStart(2, 0)
	return year + '-' + month + '-' + day
})

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
