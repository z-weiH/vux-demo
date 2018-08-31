<template>
  <div id="app">
    <tabbar v-model="$store.state.layout.pageActive">
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
        }
      }
    },
    mounted() {
      setTimeout(() => {
        let active = (
          this.$route.path === '/index' ? 0 :
          this.$route.path === '/shoucang' ? 1 :
          this.$route.path === '/wode' ? 2 : -1
        )
        this.$store.commit('layout/setPageActive',active);
      },100);
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
