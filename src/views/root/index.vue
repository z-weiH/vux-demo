<template>
  <div class="content-box">
    

    <div class="router-box">
      <transition :name="transitionName">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
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
      }
    },
    watch: {
      '$route' (to, from) {
        this.transitionName = to.meta.weight > from.meta.weight ? 'forward' : 'reverse';
      }
    },
  }
</script>

<style lang="less" scoped>

.content-box{
  height: 100%;
  .router-box{
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 50px;
  }
}

</style>

<style lang="less">

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

//微信切换样式 ，左右滚动
//前进动画样式
.forward-enter-active,.forward-leave-active{
  transition: all 0.3s;
}
.forward-enter{
  transform: translateX(100%);
}
.forward-leave-to{
  transform: translateX(-100%);
}
// 后退动画样式
.reverse-enter-active,.reverse-leave-active{
  transition: all 0.3s;
}
.reverse-enter{
  transform: translateX(-100%);
}
.reverse-leave-to{
  transform: translateX(100%);
}

</style>
