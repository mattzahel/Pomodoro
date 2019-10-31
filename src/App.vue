<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
@import "sass/_base";
@import "sass/_variables";

#app {
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $background-primary;
  color: $color-primary;
}

svg {
  fill: #f3f3f3;
  width: 3rem;
  height: 3rem;
}
</style>
