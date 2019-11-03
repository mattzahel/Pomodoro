<template>
  <section class="tasks">
    <h1>Tasks</h1>
    <form class="tasks__form" @submit.prevent="addTask">
      <input type="text" placeholder="Your task..." class="tasks__title" v-model="newTask" required>
      <input type="submit" value='Add task'>
    </form>
    <div>
      <ul class="tasks__list">
        <li v-for="(task, i) in tasks" :key="i" class="tasks__elem">
         <label class="checkbox-label">
            <input type="checkbox" :checked="task.done">
            <span class="checkbox-custom rectangular"></span>
            <span class="task__title">{{task.title}}</span>
        </label>
       </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Tasks',
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask() {
      this.$store.dispatch('addTask', this.newTask).then(() => {
        this.newTask = '';
      })
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  }
}
</script>
<style lang="scss">
.tasks {
  max-width: 40rem;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 70rem;
  }

  &__form {
    width: 100%;
    display: flex;
    padding: 0 1rem;
    margin-bottom: 2rem;

    input[type="submit"] {
      background: white;
      padding: 1rem 2rem;
      font-size: 1.4rem;
      margin-left: 1rem;
      border: none;
      border-radius: 2rem;
      cursor: pointer;
      transition: all .3s;
      &:hover {
        background-color: #f4f4f4;
        box-shadow: 3px 0px 10px 2px rgba(0,0,0,.25)
      }
    }
  }
  &__title {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    padding: 1rem;
    color: white;
    font-size: 1.6rem;
    outline-color: white;
  }
  &__list {
    text-align: left;
    padding: 1rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    }
  &__elem {
    font-size: 1.8rem;
    margin-bottom: 1.4rem;

    label {
      margin-left: 0;
    }
  }
}
.task__title {
  margin-left: .5rem;
}

.task__done {
  text-decoration: line-through;
  color: grey;
}


/* Checkbox styling */
.checkbox-label {
  position: relative;
  cursor: pointer;
}

.checkbox-label input {
  position: relative;
  opacity: 0;
  cursor: pointer;
  width: 3rem;
}
.checkbox-label .checkbox-custom {
  position: absolute;
  top: 0;
  left: 0;
  height: 2.4rem;
  width: 2.4rem;
  background: transparent;
  border-radius: .5rem;
  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -ms-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
  border: 2px solid white;
}

.checkbox-label input:checked ~ .checkbox-custom {
  background-color: #FFFFFF;
  border-radius: 5px;
  -webkit-transform: rotate(0deg) scale(1);
  -ms-transform: rotate(0deg) scale(1);
  transform: rotate(0deg) scale(1);
  opacity:1;
  border: 2px solid #FFFFFF;
}

.checkbox-label .checkbox-custom::after {
  position: absolute;
  content: "";
  left: 12px;
  top: 12px;
  height: 0px;
  width: 0px;
  border-radius: 5px;
  border: solid #FF4647;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(0deg) scale(0);
  -ms-transform: rotate(0deg) scale(0);
  transform: rotate(0deg) scale(0);
  opacity:1;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
}

.checkbox-label input:checked ~ .checkbox-custom::after {
  -webkit-transform: rotate(45deg) scale(1);
  -ms-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
  opacity:1;
  left: 8px;
  top: 3px;
  width: 6px;
  height: 12px;
  border: solid #FF4647;
  border-width: 0 2px 2px 0;
  background-color: transparent;
  border-radius: 0;
}

/* For Ripple Effect */
.checkbox-label .checkbox-custom::before {
  position: absolute;
  content: "";
  left: 10px;
  top: 10px;
  width: 0px;
  height: 0px;
  border-radius: 5px;
  border: 2px solid #FFFFFF;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);    
}

.checkbox-label input:checked ~ .checkbox-custom::before {
  left: -3px;
  top: -3px;
  width: 24px;
  height: 24px;
  border-radius: 5px;
  -webkit-transform: scale(3);
  -ms-transform: scale(3);
  transform: scale(3);
  opacity:0;
  z-index: 999;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
}
</style>