import Vue from 'vue'
import AOS from 'aos'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'
import VeeValidate from 'vee-validate';
import VueAWN from "vue-awesome-notifications"
import IdleVue from "idle-vue"

import App from './App.vue'
import router from "./route"
import store from "@/store/index"
import setupInterceptors from "@/services/setupInterceptors"

import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/vender/bootstrap-icons/bootstrap-icons.css"
import 'animate.css';
import "@/assets/css/style.css"

let options = {
  position: "top-right",
  animationDuration: "1000"
}


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VeeValidate);
Vue.use(VueAWN, options)

setupInterceptors(store)


library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 30 * 60 * 1000,
  startAtIdle: false
});

new Vue({
  render: h => h(App),
  router,
  store,
  mounted() {
    AOS.init({
      // Global settings:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    })
  },
}).$mount('#app')
