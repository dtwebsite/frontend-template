export default {
  namespaced: true, // 啟用命名空間
  state: {
    token: null, // 存儲 JWT token 的狀態
  },
  mutations: {
    setToken(state, token) {
      state.token = token; // 更新 token 狀態
    },
  },
  actions: {
    saveToken({ commit }, token) {
      commit('setToken', token); // 使用 commit 觸發 setToken 突變
    },
  },
  getters: {
    getToken(state) {
      return state.token; // 返回 token 狀態
    },
  },
};
