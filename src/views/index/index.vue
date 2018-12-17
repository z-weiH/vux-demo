<template>
  <div class="layout-page" v-touch.swipeleft="handleLeft">
    <div @click="handleClick" class="demo">我是按钮</div>
  </div>
</template>

<script>
  export default {
    mounted() {
      // 高亮底部 菜单
      this.$store.commit('layout/setPageActive',0);
    },
    methods : {
      handleClick() {
        console.log('点击事件2');
      },
      // 左滑动
      handleLeft(e) {
        this.$router.push('/shoucang')
      },
    },
  }
</script>

<style scoped>

div{
  background-color: #ffcc35;
}

.demo{
  width: 224px;
  height: 78px;
  line-height: 78px;
  border-radius: 10px;
  background-color: red;
  color: #fff;
  text-align: center;
  font-size: 32px;
}

</style>