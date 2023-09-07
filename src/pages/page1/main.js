import Vue from 'vue'
import App from '@/app/app1/App.vue'
import CountTo from 'vue-count-to'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import '../../assets/animate.css'
import '@/assets/style/reset.css'
Vue.use(VueAwesomeSwiper)
Vue.component('countTo', CountTo)

window.bus = new Vue()
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
