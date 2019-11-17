<template>
  <button @click="clickEvent" class="base-button">
    <slot name="content"></slot>
      <svg class="icon">
          <use :xlink:href="`${baseUrl}icons/sprite.svg#${icon}`"></use>
      </svg>
  </button>
</template>
<script>
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL       
    }
  },
  props: {
    icon: String
  },
  methods: {
    clickEvent() {
      this.$emit('btnEvent');
    }
  }
}
</script>
<style lang="scss">
@import "@/sass/_variables";

.base-button {
  background: white;
  border: none;
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 1rem;
  cursor: pointer;
  transition: all .3s ease-out;

  svg {
    fill: $color-theme-1;
  }

  &:hover {
    box-shadow: 0px 3px 10px rgba(0,0,0,.1); 
    background-color: #dadada;
  }
}
</style>