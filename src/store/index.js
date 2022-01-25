import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bd: [],
    pageCount: 0,
  },
  getters: { // state 를 계산할 때 사용
  },
  mutations: { // 동기적 변이를 다룸
    setBoardData(state, boardData) {
      state.bd = boardData;
    },
    setPagination(state, pageCount) {
      state.pageCount = pageCount;
    },
  },
  actions: { // 서버측에 데이터를 가져오기위한 비동기 처리를 다룸
    getBoardData({ commit }, pageNo) {
      axios.get('/api/board', { params: { page: pageNo } })
        .then((res) => {
          commit('setBoardData', res.data.boardData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pagination({ commit }) {
      axios.get('/api/board/pagination')
        .then((res) => {
          commit('setPagination', res.data.count);
        }).catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
  },
});
