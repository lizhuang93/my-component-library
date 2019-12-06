import Vue from 'vue';
import App from './App.vue';
import router from './router';

import BTM from '@bitmain/components-tree';
Vue.use(BTM);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
