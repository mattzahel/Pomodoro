<template>
  <div id="app">
    <div class="app__wrapper"  v-bind:class="{ dark: darkMode }">
      <Navbar />
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    }
  }
}
</script>
<style lang="scss">
@import "sass/_base";
@import "sass/_variables";


#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
.app__wrapper {
  min-height: 100vh;
  background-color: $background-primary;
  color: $color-primary;
}

.dark {
  background-color:$background-secondary;
}

svg {
  fill: #f3f3f3;
  width: 3rem;
  height: 3rem;
}
</style>
