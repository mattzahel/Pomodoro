<template>
   <div class="timer__controls">
      <BaseButton icon="play-button" @btnEvent="activateTimer" v-if="paused!=false"/>
      <BaseButton icon="pause-button" @btnEvent="pauseTimer" v-if="paused!=null && paused!=true"/>
      <BaseButton icon="stop-button" @btnEvent="resetTimer" />
    </div>
</template>
<script>
import {mapState} from 'vuex';
import  BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
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
    ...mapState(['paused'])
  }
}
</script>
<style lang="scss">
.timer {
  height: calc(100vh - 9rem);
    &__controls {
      display: flex;
      justify-content: center;
      margin: 2rem 0 2rem 0;
    }
  }
</style>