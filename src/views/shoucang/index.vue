<template>
  <div class="layout-page" ref="page">
    2
  </div>
</template>

<script>
  import Hammer from 'hammerjs'
  export default {
    mounted() {
      let square = this.$refs.page;
      var hammer = new Hammer(square);
      hammer.on('swipeleft', (e) => {
        this.$router.push('/wode');
        this.$store.commit('layout/setPageActive',2);
      });
      hammer.on('swiperight', (e) => {
        this.$router.push('/index');
        this.$store.commit('layout/setPageActive',0);
      });

      this.$store.commit('layout/setPageActive',1);
    },
  }
</script>

<style scoped>

div{
  background-color: #5bd5a0;
}

</style>