<template>
  <div class="settings__control">
    <button class="settings__btn" @click="$emit('changeDuration', value - 60)" :disabled="value <= min">
      <svg>
        <use :xlink:href="`${baseUrl}icons/sprite.svg#minus`"></use>
      </svg>
    </button>
    <span class="settings__time">{{value | secToMin}}:00</span>
     <button class="settings__btn" @click="$emit('changeDuration', value + 60)" :disabled="value >= max">
      <svg>
        <use :xlink:href="`${baseUrl}icons/sprite.svg#plus`"></use>
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: 'settingsControl',
  props: ['value', 'min', 'max'],
  data() {
    return {
      baseUrl: process.env.BASE_URL 
    }
  },
  filters: {
    secToMin(val) {
      return val / 60;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../sass/_variables";

  .settings__time {
    font-size: 3rem;
    margin: 0rem 2rem;

     @media screen and (min-width: 768px) {
        font-size: 4rem;
      }
  }
  .settings__btn {
    background-color: transparent;
    border: none;
    padding: 1rem;
    border-radius: 50%;
    transition: all .3s;
    cursor: pointer;

    svg {
      width: 2.5rem;
      height: 2.5rem;

      @media screen and (min-width: 768px) {
        width: 3.5rem;
        height: 3.5rem;
      }
    }
    
    &:disabled {
      cursor:not-allowed;
      svg {
        fill: grey;
      }
    }
  }
</style>