<template>
  <div class="layout-page" v-touch.swipeleft="handleLeft" v-touch.swiperight="handleRight">
    2
  </div>
</template>

<script>
  export default {
    mounted() {
      // 高亮底部 菜单
      this.$store.commit('layout/setPageActive',1);
    },
    methods : {
      // 左滑动
      handleLeft(e) {
        this.$router.push('/wode')
      },
      // 右滑动
      handleRight(e) {
        this.$router.push('/index')
      },
    },
  }
</script>

<style scoped>

div{
  background-color: #5bd5a0;
}

</style>