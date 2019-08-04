import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ko';
import App from './App';
Vue.use(ElementUI, { locale });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
