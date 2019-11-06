<template>
  <div class="timer">
    <TimerWidget />
    <!-- <Tasks /> -->
  </div>
</template>

<script>
import  TimerWidget from "@/components/TimerWidget.vue";
// import  Tasks from "@/components/Tasks.vue";

export default {
  name: 'timer',
  components: {
    TimerWidget, 
    // Tasks
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
  }
</style>