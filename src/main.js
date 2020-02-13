import Vue from 'vue';
import App from './app.vue';
import router from './router';
import './common.scss';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

Vue.config.productionTip = false;

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('username');
  if (!role && to.path !== '/login') {
      next('/login');
  } else {
      next();
  }
});

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app');
