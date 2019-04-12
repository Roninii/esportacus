import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

library.add(faBars);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
