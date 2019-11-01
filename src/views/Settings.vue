<template>
  <div class="settings">
    <h1>Settings</h1>

    <div class="settings__element">
      <h2 class="settings__title">
        Session Duration
      </h2>
      <SettingsControl :value="session" :min="sessionMin" :max="sessionMax"/>
    </div>
    <div class="settings__element">
      <h2 class="settings__title">
        Break Duration
      </h2>
        <SettingsControl :value="shortBreak" :min="shortBreakMin" :max="shortBreakMax"/>
    </div>
    <div class="settings__element">
      <h2 class="settings__title">
        Long Break Duration
      </h2>
        <SettingsControl :value="longBreak" :min="longBreakMin" :max="longBreakMax"/>
    </div>
    <div class="settings__element">
      <h2 class="settings__title">
        Dark mode
      </h2>
      <BaseToggle />
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex';
import SettingsControl from "@/components/SettingsControl.vue";
import BaseToggle from "@/components/BaseToggle.vue";

export default {
  name: 'settings',
  components: {
    SettingsControl,
    BaseToggle
  }, 
  data() {
    return {
      sessionMin: 15 * 60,
      sessionMax: 60 * 60,
      shortBreakMin: 1 * 60,
      shortBreakMax: 15 * 60,
      longBreakMin: 5 * 60,
      longBreakMax: 30 * 60
    }
  },
  methods: {
    // changeTime() {
    //   this.$store.commit('SET_SESSION_DURATION')
    // }
  },
  computed: {
    ...mapState(['session', 'shortBreak', 'longBreak']),
    // ...mapMutations(['SET_SESSION_DURATION', 'SET_BREAK_DURATION', 'SET_LONG_BREAK_DURATION'])
  }
}
</script>
<style lang="scss">
  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;

     @media screen and (min-width: 768px) {
        font-size: 3.5rem;
      }
  }
  .settings__element {
    margin-bottom: 3rem;
  }
  .settings__title {
    text-align: center;
    font-weight: 400;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }
</style>