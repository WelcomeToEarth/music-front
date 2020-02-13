import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
  path: '/',
  redirect: { name: 'mobile' },
}, {
  path: '/mobile',
  name: 'mobile',
  component: () => import(/* webpackChunkName: 'mobile' */ './views/mobile.vue'),
}, {
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: 'mobile' */ './components/Login.vue'),
}, {
  path: '/detail',
  name: 'detail',
  component: () => import(/* webpackChunkName: 'mobile' */ './components/Detail.vue'),
}]
export default new Router({ routes });
