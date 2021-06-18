import Vue from 'vue'

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;

import App from './App.vue'
import router from './router'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// request
import Request from '@/network/request'
Vue.prototype.$req = Request;

// loading
import loading from "@/components/loading";
Vue.prototype.$loading = loading;

// 引入自定义插件
import plugins from '@/components/plugins/index'
Vue.use(plugins);

// 引入自定义指令
import directives from '@/static/js/app/directive/index';
Vue.use(directives);

import VueFormly from 'vue-formly';
import VueFormlyBootstrap from 'vue-formly-bootstrap'; //note that this is optional if you've created your own fields
Vue.use(VueFormly);
Vue.use(VueFormlyBootstrap);

import filters from '@/static/js/filters/index'
Vue.use(filters)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
