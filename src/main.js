import Vue from 'vue'
import AOS from 'aos'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'
import VeeValidate from 'vee-validate';
import VueAWN from "vue-awesome-notifications"
import IdleVue from "idle-vue"
import Vue2Popup from 'vue2-popup';
import App from './App.vue'
import router from "./route"
import store from "@/store/index"
import setupInterceptors from "@/services/setupInterceptors"
import * as VueGoogleMaps from 'vue2-google-maps'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/vender/bootstrap-icons/bootstrap-icons.css"
import 'animate.css';
import "@/assets/css/style.css"
import 'leaflet/dist/leaflet.css';
let options = {
  position: "top-right",
  animationDuration: "1000"
}

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VeeValidate);
Vue.use(VueAWN, options)
Vue.use(Vue2Popup);
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
Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_TOKEN',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})
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
