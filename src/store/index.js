import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: 1500,
    shortBreak: 300,
    longBreak: 1200, 
    activeMode: 'session',
    darkMode: false,
  },
  mutations: {
    SET_SESSION_DURATION(state, payload) {
      state.session = payload;
    },
    SET_BREAK_DURATION(state, payload) {
      state.shortBreak = payload;
    },
    SET_LONG_BREAK_DURATION(state, payload) {
      state.longBreak = payload;
    },
    TOGGLE_DARK_MODE(state) {
      state.darkMode = !state.darkMode;
    }
  },
  actions: {
  },
  getters: {
    // secTimeToString(secs) {
    //   const min = Math.floor(secs/60);
    //   const sec = secs % 60;

    //   let secString;

    //   if (sec < 10) {
    //     secString = '0' + sec
    //   } else {
    //     secString = sec
    //   }
    //   return `${min}:${secString}`
    // }
  },
  modules: {
  }
})
