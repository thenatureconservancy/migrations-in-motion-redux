import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(require('vue-shortkey'));

import DatGui from '@cyrilf/vue-dat-gui';

Vue.use(DatGui);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
