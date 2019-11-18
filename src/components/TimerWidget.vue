<template>
  <section>
    <h1>{{activeMode}}</h1>
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
    activeMode () {
      return this.$store.getters.activeModeName;
    }
  },
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