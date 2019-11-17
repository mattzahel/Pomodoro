import Vue from 'vue'
import Vuex from 'vuex'
import ProgressBar from 'progressbar.js'

Vue.use(Vuex)

function secTimeToString(secs) {
  const min = Math.floor(secs/60)
  const sec = secs % 60

  let secString;

  if (sec < 10) {
    secString = '0' + sec
  } else {
    secString = sec
  }
  return `${min}:${secString}`
}


export default new Vuex.Store({
  state: {
    tasks: [],
    session: 1500,
    shortBreak: 300,
    longBreak: 1200, 
    activeMode: 'session',
    pomodoroCounter: 0,
    darkMode: true,
    circle: null,
    container: null,
    secLeft: null,
    progressStep: null,
    paused: true,
    interval: null
  },
  mutations: {
    TOGGLE_DARK_MODE(state) {
      state.darkMode = !state.darkMode;
    },
    SET_TASK(state, task) {
      state.tasks.push({
        title: task,
        done: false
      });
    },
    CHANGE_TASK_STATUS(state, task) {
      task.done = !task.done;
    },
    // timer mutations
    SET_SESSION_DURATION(state, payload) {
      state.session = payload;
    },
    SET_BREAK_DURATION(state, payload) {
      state.shortBreak = payload;
    },
    SET_LONG_BREAK_DURATION(state, payload) {
      state.longBreak = payload;
    },
    SET_PROGRESS_CONTAINER(state, el) {
      state.container = el;
    },
    DRAW_TIMER(state) {
      state.circle = new ProgressBar.Circle(state.container, {
        text: {
          style: {
            fontSize: '4rem',
            color: '#f3f3f3',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: {
              prefix: true,
              value: 'translate(-50%, -50%)',
            },
          },
          value: secTimeToString(state.session)
        },
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FF0700',
        trailColor: '#f3f3f3',
        trailWidth: 6,
        svgStyle: null,
        
      });
      state.circle.animate(0.7); 
    },
    RUN_TIMER(payload) {
      // console.log(payload);
      payload.secLeft--;
    },
    SET_SECS_LEFT(state, payload) {
      state.secLeft = payload
      console.log(state.session)
    },
    SET_PAUSE_STATE(state, payload) {
      state.paused = payload;
      console.log(payload)
    }
  },
  actions: {
    addTask({commit}, payload) {
      commit('SET_TASK', payload)
    },
    activateTimer({commit, state}) {
      commit("SET_PAUSE_STATE", false);
      if(state.secLeft === null && state.activeMode === 'session') {
        commit('SET_SECS_LEFT', state.session);
      } else if(state.secLeft === null && state.activeMode === 'shortBreak') {
        commit('SET_SECS_LEFT', state.shortBreak);
      } else if(state.secLeft === null && state.activeMode === 'longBreak') {
        commit('SET_SECS_LEFT', state.longBreak);
      }
      state.interval = setInterval(() => {
        commit('RUN_TIMER', state.secLeft);
        state.circle.setText(secTimeToString(state.secLeft))
      }, 1000)
    },
    pauseTimer({commit, state}) {
      commit("SET_PAUSE_STATE", true);
      clearInterval(state.interval);
    },
    resetTimer({commit, state}) {
      commit("SET_PAUSE_STATE", true);
      clearInterval(state.interval);
      state.secLeft = state.session;
      state.circle.setText(secTimeToString(state.secLeft))

    }
  },
  getters: {
  },
  modules: {
  },
})
