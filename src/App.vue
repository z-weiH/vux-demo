<template>
  <div id="app">
    <tabbar v-if="$route.meta.weight" v-model="$store.state.layout.pageActive">
      <tabbar-item link="/index">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/shoucang">
        <span slot="label">收藏</span>
      </tabbar-item>
      <tabbar-item link="/wode">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    <div class="router-box">
      <transition :name="transitionName">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  /* 
    实现 滑动动画效果思路
      1. 定义router 权重 ， 定义动画
      2. 监听 $route 变化 ， 根据权重 判断 执行 向前进 还是 后退动画
      3. 执行动画的外层 容器 需要 position: absolute; 不然会有 白边
  */
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
    },
    data() {
      return {
        transitionName : '',
        active : -1,
      }
    },
    watch: {
      '$route' (to, from) {
        if(to.meta.weight && from.meta.weight){
          this.transitionName = to.meta.weight > from.meta.weight ? 'forward' : 'reverse';
        }else{
          this.transitionName = '';
        }
      }
    },
    mounted() {

    },
  }
</script>

<style lang="less" scoped>

  @import '~vux/src/styles/reset.less';
  #app{
    min-height: 100%;
    .router-box{
      height: 100%;
      position: relative;
    }
  }

</style>

<style lang="less">

//微信切换样式 ，左右滚动
//前进动画样式
.forward-enter-active,.forward-leave-active{
  transition: all .5s;
}
.forward-enter{
  transform: translateX(100%);
  opacity: 0;
}
.forward-leave-to{
  transform: translateX(-100%);
  opacity: 1;
}
// 后退动画样式
.reverse-enter-active,.reverse-leave-active{
  transition: all .5s;
}
.reverse-enter{
  transform: translateX(-100%);
  opacity: 0;
}
.reverse-leave-to{
  transform: translateX(100%);
  opacity: 1;
}

</style>
