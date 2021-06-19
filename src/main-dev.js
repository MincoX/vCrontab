import Vue from 'vue';

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import * as echarts from 'echarts'
import VueFormly from 'vue-formly';
import Request from '@/network/request';
import Loading from "@/components/loading";
import Filters from '@/static/js/filter/index';
import Plugins from '@/components/plugins/index';
import Directives from '@/static/js/directive/index';
import VueFormlyBootstrap from 'vue-formly-bootstrap';

import App from '@/App.vue';
import router from '@/router';

Vue.use(Plugins);
Vue.use(Filters);
Vue.use(ElementUI);
Vue.use(VueFormly);
Vue.use(Directives);
Vue.use(VueFormlyBootstrap);

Vue.prototype.$req = Request;
Vue.prototype.$loading = Loading;
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')