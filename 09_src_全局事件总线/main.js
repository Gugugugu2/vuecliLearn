import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

const Demo = Vue.extend({});
const d = new Demo();
Vue.prototype.x = d;


new Vue({
  render: h => h(App),
  beforeCreate() {
    // 全局事件总线
    Vue.prototype.$bus = this
  },
}).$mount('#app')
