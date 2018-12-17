<template>
  <div class="layout-page" v-touch.swiperight="handleRight">
    3
  </div>
</template>

<script>
  export default {
    mounted() {
      // 高亮底部 菜单
      this.$store.commit('layout/setPageActive',2);
    },
    methods : {
      // 右滑动
      handleRight(e) {
        this.$router.push('/shoucang')
      },
    },
  }
</script>

<style scoped>

div{
  background-color: #1daee9;
}

</style>