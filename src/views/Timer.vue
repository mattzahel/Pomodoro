<template>
  <div class="wrapper">
    <div class="timer">
      <TimerWidget />
      <PomodoroCounter />
      <TimerControls />
    </div>
    <Tasks />
  </div>
</template>

<script>
import  TimerWidget from "@/components/TimerWidget.vue";
import  TimerControls from "@/components/TimerControls.vue";
import  PomodoroCounter from "@/components/PomodoroCounter.vue";
import  Tasks from "@/components/Tasks.vue";
import {mapState} from 'vuex';

export default {
  name: 'timer',
  components: {
    TimerWidget, 
    TimerControls,
    PomodoroCounter,
    Tasks
  },
  computed: {
    ...mapState(['activeMode'])
  }
}
</script>
<style lang="scss">
  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .timer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 3rem 0 6rem 0;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
</style>