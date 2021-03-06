import Vue from 'vue'
import Router from 'vue-router'

// 权限 排除页面
import jurisdictionExclude from './jurisdictionExclude'
// 所有 页面 router
import pages from './pages'
import store from '../store'

if(process.env.NODE_ENV === 'development') {
  Vue.use(Router);
}

let router = new Router({
  routes: pages,
});

/* 前置钩子 */
router.beforeEach((to, from, next) => {
  // 返回顶部
  window.scrollTo(0, 0);
  // 解决页面切换动画白屏问题
  if(store.state.layout.animationStatus === false) {
    return;
  }
  // 用户超时 拦截

  // 权限判断 start
    // 环境 判断
  if(process.env.NODE_ENV === 'development') {
    next();
    // 不需要权限 页面
  }else if(jurisdictionExclude.indexOf(to.path) !== -1) {
    next();
  }else{
    next();
    // 权限拦截
  }
  // 权限判断 end
});

/* 后置钩子 */
router.afterEach((to, from) => {
  // 设置页面 title
  if(to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router
