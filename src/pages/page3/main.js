import Vue from 'vue'
import App from '@/app/app3/App.vue'

window.bus = new Vue()
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
