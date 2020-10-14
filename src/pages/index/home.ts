import Vue from 'vue'
import Home from './Home.vue';
import vuetify from '@/plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';

new Vue({
  vuetify,
  render: h => h(Home)
}).$mount('#app');
