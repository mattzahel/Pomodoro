<template>
<div class="container">
  <h1>What is Pomodoro Technique?</h1>
  <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.</p>
  <br>
  <h2>How to use Pomodoro Timer?</h2>
  <ol>
    <li>Decide on the task to be done.</li>
    <li>Set session and breaks duration time.</li>
    <li>Work on the task. (about 25 mins)</li>
    <li>When the timer stops, take a short break (3-5 mins).</li>
    <li>Every 4 finished sessions take a long break (15-30 mins).</li>
  </ol>
</div>
</template>
<script>
export default {
  name: 'About'
}
</script>
<style lang="scss" scoped>
  h1 {
    text-align: left;
    margin-bottom: 1rem;
    font-size: 2.5rem;

    @media screen and (min-width: 768px) {
    margin: 1rem 0;

    }
  }
  p {
    font-size: 1.6rem;
    text-align: left;
    line-height: 1.5;

    @media screen and (min-width: 992px) {
      font-size: 1.8rem;
    }
  }
  h2 {
    font-size: 2.5rem;
    text-align: left;
  }
  ol {
    text-align: left;
    margin: 1rem 2rem;
    font-size: 1.6rem;
    line-height: 1.5;
  }
</style>