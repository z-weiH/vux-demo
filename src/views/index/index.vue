<template>
  <div class="layout-page" ref="page">
    1
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
        this.$store.commit('layout/setPageActive',1);
      });
    },
  }
</script>

<style scoped>

div{
  background-color: #ffcc35;
}

</style>