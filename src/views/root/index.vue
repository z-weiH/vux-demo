<template>
  <div class="content-box">
    <tabbar>
      <tabbar-item selected link="/index">
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

      </transition>
      <router-view />
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
        console.log(22);
        this.transitionName = JSON.parse(window.sessionStorage.history).transitionName;
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
