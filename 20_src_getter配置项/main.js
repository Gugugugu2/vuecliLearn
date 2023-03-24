import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// // 引入vuex
// import vuex from 'vuex';

// Vue.use(vuex);


// 引入store
import store from './store/index'


new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  store: store,
}).$mount('#app')
