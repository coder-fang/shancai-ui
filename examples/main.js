import Vue from 'vue'
import App from './App.vue'
import hmUI from '../packages'

Vue.config.productionTip = false
Vue.use(hmUI)

new Vue({
    render: h => h(App),
}).$mount('#app')