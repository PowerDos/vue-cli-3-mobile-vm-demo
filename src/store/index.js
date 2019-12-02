import Vue from 'vue';
import Vuex from 'vuex';

// 引入全局存储
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

// 引入模块存储
import home from './modules/home';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalFlag: 0
  },
  actions,
  mutations,
  getters,
  modules: {
    home
  }
});
