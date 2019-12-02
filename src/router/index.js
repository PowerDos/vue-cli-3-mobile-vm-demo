import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/page/Home';

Vue.use(Router);

export default new Router({
  routes: [
    // 登陆
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});
