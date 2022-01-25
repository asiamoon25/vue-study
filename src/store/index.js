import Vue from 'vue';
import Vuex from 'vuex';
import boardStore from '@/store/modules/board';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    boardStore,
  },
});
