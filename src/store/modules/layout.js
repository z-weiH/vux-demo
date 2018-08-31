export default {
  namespaced: true,
  state : {
    pageActive : -1,
  },
  mutations : {
    setPageActive(state, data) {
			state.pageActive = data;
    },
  },
}