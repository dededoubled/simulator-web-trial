import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons'


library.add(faFacebookF)
library.add(faYoutube)
library.add(faTwitter)
library.add(faSignInAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import './assets/css/style.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
