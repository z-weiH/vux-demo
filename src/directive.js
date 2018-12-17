import Vue from 'vue'
import Hammer from 'hammerjs'



/* 
  基于 Hammer 封装常用 移动端事件
  支持的事件：
    tap - 点击
    swipeleft - 向左滑动
    swiperight - 向右滑动
    swipeup - 向上滑动
    swipedown - 向下滑动
*/
Vue.directive('touch',{
  bind(el, binding, vnode) {
    // 获得事件名
    let eventName = Object.keys(binding.modifiers)[0];
    let hammer = new Hammer(el);
    el.hammer = hammer;
    hammer.on(eventName, (event) => {
      binding.value(event);
    });
  },
  unbind(el, binding, vnode) {
    el.hammer.destroy();
  },
});