<template>
  <div class="timer">
    <!-- <h1>Timer</h1> -->
    <Tasks />
  </div>
</template>

<script>
import  Tasks from "@/components/Tasks.vue";

export default {
  name: 'timer',
  components: {
    Tasks
  }
}
</script>
<style lang="scss">
  // .timer {
  //   width: 100%;
  //   display: grid;
  //   grid-template-columns: repeat(2, 1fr);
  // }
</style>