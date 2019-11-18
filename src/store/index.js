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
    progress: 0,
    paused: null,
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
    SET_ACTIVE_MODE (state, value) {
      state.activeMode = value
    },
    DRAW_TIMER(state) {
      state.circle = new ProgressBar.Circle(state.container, {
        text: {
          value: secTimeToString(state.session),
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
          
        },
        strokeWidth: 3,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FF0700',
        trailColor: '#f3f3f3',
        trailWidth: 3,
        svgStyle: null,
        
      });
    },
    RUN_TIMER(state) {
      state.secLeft--;
    },
    CALC_STEP(state) {
      if (state.activeMode === 'session') {
        state.progressStep = 1 / state.session
      } else if (state.activeMode === 'shortBreak') {
        state.progressStep = 1 / state.shortBreak
      } else {
        state.progressStep = 1 / state.longBreak
      }
    },
    SET_PROGRESS(state, value) {
      state.progress = value
    },
    SET_SECS_LEFT(state, payload) {
      state.secLeft = payload
    },
    SET_PAUSE_STATE(state, payload) {
      state.paused = payload;
    }
  },
  actions: {
    addTask({commit}, payload) {
      commit('SET_TASK', payload)
    },
    animateTimer({commit, dispatch, state}) {
      dispatch("activateTimer");
      state.interval = setInterval(() => {
        commit('SET_PROGRESS', state.progress + state.progressStep)
        commit('RUN_TIMER');

        if(state.secLeft < 0) {
          clearInterval(state.interval);
          if(state.activeMode === 'session' && state.pomodoroCounter < 4) {
            commit('SET_ACTIVE_MODE', 'shortBreak');
            state.pomodoroCounter++;
          } else if(state.activeMode === 'session' && state.pomodoroCounter === 4) {
            commit('SET_ACTIVE_MODE', 'longBreak');
            state.pomodoroCounter = 0;
          } else if(state.activeMode === 'shortBreak' || state.activeMode === 'longBreak') {
            commit('SET_ACTIVE_MODE', 'session');
          }
          // notification after finished long break (pomodoro done) and reset
          return dispatch('animateTimer');
        }
        state.circle.animate(state.progress, {
          duration: 1000
        }); //fix error
        state.circle.setText(secTimeToString(state.secLeft));
      }, 1000)
    },
    activateTimer({commit, state}) {
      commit("CALC_STEP");
      if(!state.paused && state.activeMode === 'session') {
        commit('SET_SECS_LEFT', state.session);
        commit('SET_PROGRESS', 0)
      } else if(!state.paused && state.activeMode === 'shortBreak') {
        commit('SET_SECS_LEFT', state.shortBreak);
        commit('SET_PROGRESS', 0)
      } else if(!state.paused && state.activeMode === 'longBreak') {
        commit('SET_SECS_LEFT', state.longBreak);
        commit('SET_PROGRESS', 0)
      }
      commit("SET_PAUSE_STATE", false);
    },
    pauseTimer({commit, state}) {
      commit("SET_PAUSE_STATE", true);
      clearInterval(state.interval);
    },
    resetTimer({commit, state}) {
      commit("SET_PAUSE_STATE", true);
      clearInterval(state.interval);
      state.circle.destroy();
      state.secLeft = state.session;
      state.progress = 0;
      state.pomodoroCounter = 0;
      commit('DRAW_TIMER');
    }
  },
  getters: {
    activeModeName(state) {
      if (state.activeMode === 'session') return 'Time to work!'
      else if (state.activeMode === 'shortBreak') return 'Short break'
      else if (state.activeMode === 'longBreak') return 'Long break'
    }
  },
  modules: {
  },
})
