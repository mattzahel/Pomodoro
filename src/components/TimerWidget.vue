<template>
  <section>
    <h1>{{activeMode | capitalizeFirst}}</h1>
    <div class="progress">
      <div class="progress__container" ref="progress"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TimerWidget',
  mounted() {
    this.$store.commit('SET_PROGRESS_CONTAINER', this.$refs.progress);
    this.$store.commit('DRAW_TIMER');
  },
  computed: {
    activeMode() {
      return this.$store.state.activeMode;
    } 
  },
  filters: {
    capitalizeFirst(value) {
      if(!value) return
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
}
</script>
<style lang="scss" scoped>
  .progress {
    max-width: 22rem;
    height: 22rem;
    margin: 1rem auto;

    @media screen and (min-width: 768px) {
      max-width: 50rem;
      height: 50rem;
    }

    &__container {
      width: 100%;
      height: 100%;
      margin: 0 1rem;
    }
  }
</style>