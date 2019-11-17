<template>
  <div class="timer">
    <TimerWidget />
    <!-- <Tasks /> -->
    <div class="timer__controls">
      <BaseButton icon="play-button" @btnEvent="activateTimer" v-if="paused" />
      <BaseButton icon="pause-button" @btnEvent="pauseTimer" v-if="!paused" />
      <BaseButton icon="stop-button" @btnEvent="resetTimer" />
    </div>
  </div>
</template>

<script>
import  TimerWidget from "@/components/TimerWidget.vue";
import  BaseButton from "@/components/BaseButton.vue";
// import  Tasks from "@/components/Tasks.vue";
import {mapState} from 'vuex';

export default {
  name: 'timer',
  components: {
    TimerWidget, 
    // Tasks,
    BaseButton
  },
  methods: {
    activateTimer() {
      this.$store.dispatch('animateTimer');
    },
    pauseTimer() {
      this.$store.dispatch('pauseTimer');
    },
    resetTimer() {
      this.$store.dispatch('resetTimer');
    }
  },
  computed: {
    ...mapState(['activeMode', 'paused'])
  }
}
</script>
<style lang="scss">
  .timer {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    &__controls {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
    }
  }
</style>