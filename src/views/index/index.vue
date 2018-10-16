<template>
  <div class="layout-page" ref="page">
    <div class="demo">我是按钮</div>
  </div>
</template>

<script>
  import Hammer from 'hammerjs'
  export default {
    mounted() {
      let square = this.$refs.page;
      var hammer = new Hammer(square);
      hammer.on('swipeleft', (e) => {
        this.$router.push('/shoucang');
      });

      this.$store.commit('layout/setPageActive',0);
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