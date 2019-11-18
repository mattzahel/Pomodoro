<template>
  <div class="counter">
    Stage {{pomodoroCounter}} / 4
  </div>
</template>
<script>
export default {
  computed: {
    pomodoroCounter() {
      return this.$store.state.pomodoroCounter
    }
  }
}
</script>
<style lang="scss">
  .counter {
    font-size: 1.6rem;

    @media screen and (min-width: 768px) {
      font-size: 2.4rem;
      margin: 3rem 0;
    }
  }
</style>
