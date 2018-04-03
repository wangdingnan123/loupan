import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuer from 'vue-resource'

Vue.config.productionTip = false
Vue.use(Vuer)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
