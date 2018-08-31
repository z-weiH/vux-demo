<template>
  <div class="layout-page" ref="page">
    3
  </div>
</template>

<script>
  import Hammer from 'hammerjs'
  export default {
    mounted() {
      let square = this.$refs.page;
      var hammer = new Hammer(square);
      hammer.on('swiperight', (e) => {
        this.$router.push('/shoucang');
        this.$store.commit('layout/setPageActive',1);
      });

      this.$store.commit('layout/setPageActive',2);
    },
  }
</script>

<style scoped>

div{
  background-color: #1daee9;
}

</style>