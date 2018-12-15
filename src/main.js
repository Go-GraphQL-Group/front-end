// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import store from './store'
import 'muse-ui-message/dist/muse-ui-message.css'
import Message from 'muse-ui-message'
import Qs from 'qs'

Vue.use(MuseUI)
Vue.use(Message)

Vue.prototype.$http = axios
Vue.prototype.$qs = Qs
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
