import Vue from 'vue'
import App from './App.vue'


// 完整引入 
// 引入ElementUI组件库
// import ElementUI from 'element-ui';

// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 应用ElementUI
// Vue.use(ElementUI);

Vue.config.productionTip = false;




new Vue({
  render: h => h(App),
}).$mount('#app')
