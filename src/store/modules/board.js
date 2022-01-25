import axios from 'axios';

const boardStore = {
  namespaced: true,
  state: {
    bd: [],
    pageCount: 0,
    page: 1,
  },
  getters: { // state 를 계산할 때 사용
    getPage(state) {
      return state.page;
    },
    getPageCount(state) {
      return state.pageCount;
    },
    getBd(state) {
      return state.bd;
    },
  },
  mutations: { // 동기적 변이를 다룸
    setBoardData(state, boardData) {
      state.bd = boardData;
    },
    setPagination(state, pageCount) {
      state.pageCount = pageCount;
    },
    setPage(state, pageNo) {
      state.page = pageNo;
    },
  },
  actions: { // 서버측에 데이터를 가져오기위한 비동기 처리를 다룸
    getBoardData({ commit }, pageNo) {
      axios.get('/api/board', { params: { page: pageNo } })
        .then((res) => {
          commit('setBoardData', res.data.boardData);
          commit('setPage', pageNo);
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
    search({ commit }, searchText) { // 구현 중
      axios.get('/api/board/search', { params: { search: searchText } })
        .then((res) => {
          commit('setBoardData', res.data.boardData);
          commit('setPagination', res.data.count);
        }).catch((err) => {
          console.log(err);
        });
    },
  },
};

export default boardStore;
