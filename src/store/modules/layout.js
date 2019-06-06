export default {
  namespaced: true,
  state : {
    // 底部菜单高亮
    pageActive : -1,
    // 页面切换动画状态
    animationStatus : true,
  },
  mutations : {
    setPageActive(state, data) {
			state.pageActive = data;
    },
    setAnimationStatus(state, data) {
      state.animationStatus = data;
    },
  },
}