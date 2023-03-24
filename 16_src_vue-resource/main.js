import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// 引入插件
import vueResource from 'vue-resource';

// 使用插件
Vue.use(vueResource);

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
