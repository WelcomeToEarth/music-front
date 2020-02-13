import router from '@/router';
import store from '@/store';

window.addEventListener('beforeunload', () => {
  const cache = JSON.stringify(store.state);
  localStorage.setItem('store-cache', cache);
});
router.beforeEach((to, from, next) => {
  const cache = localStorage.getItem('store-cache');
  if (cache) {
    const state = Object.assign({}, store.state, JSON.parse(cache));
    store.replaceState(state);
    localStorage.removeItem('store-cache');
  }
  next();
});
