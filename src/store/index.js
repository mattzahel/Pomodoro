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
    session: 1500,
    shortBreak: 300,
    longBreak: 1200, 
    activeMode: 'session',
    darkMode: true,
    tasks: [],
    container: null
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
    SET_PROGRESS_CONTAINER(state, el) {
      state.container = el;
    },
    DRAW_TIMER(state) {
      var bar = new ProgressBar.Circle(state.container, {
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
      
      bar.animate(0.7); 
    }
  },
  actions: {
    addTask({commit}, payload) {
      commit('SET_TASK', payload)
    }
  },
  getters: {
  },
  modules: {
  },
})
