<template>
  <div class="toggle__wrapper">
    <input type="checkbox" name="toggle" class="switch" id="toggle-1" :checked="darkMode" @click="TOGGLE_DARK_MODE">
    <label for="toggle-1"></label>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_DARK_MODE'])
  },
  computed: {
    ...mapState(['darkMode']),
    
  }
}
</script>
<style lang="scss">
$sw-height: 3.5rem;
$sw-width: 6rem;

.toggle__wrapper {
  padding: 2rem 0;
}

input{
  &.switch {
    opacity: 0; 
    position:absolute; 
    left: -9999px;
    margin: 2rem;

    & + label{
      user-select: none;
      transition: .2s ease;
      display: inline-block;
      height: $sw-height;
      width: $sw-width;
      position:relative;
      box-shadow: inset 0 0 0px 2px #e4e4e4;
      border-radius: 60px;
      &:before{
        content: "";
        position: absolute;
        display: block;
        height: $sw-height;
        width: $sw-height;
        top: 0;
        left: 0;
        border-radius: $sw-height/2;
        background: transparent;     
        transition: .2s cubic-bezier(.24,0,.5,1);
      }
      &:after {
        content: "";
        position: absolute;
        display: block;
        height: 28px;
        width: 28px;
        top: 50%;
        margin-top:-14px;
        left: 1px;
        border-radius: 60px;
        background: #fff;
        box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 0px 0 hsla(0,0%,0%,.04), 0 4px 9px hsla(0,0%,0%,.13), 0 3px 3px hsla(0,0%,0%,.05);
        transition: .35s cubic-bezier(.54,1.60,.5,1);
        }
      span{
        white-space:nowrap;
        height:$sw-height;
        line-height:$sw-height;
        margin-left: $sw-width;
        padding-left:16px;
      }
    }
    &:checked{
      & + label:before {
        width: $sw-width;
        background: #000;
        transition: width .2s cubic-bezier(0,0,0,.1);
      }
      
      & + label:after{
        left: $sw-width - $sw-height + 1;
      }
      
      & + label{
        box-shadow: inset 0 0 0px 25px #e4e4e4;
        transition: box-shadow 2.5s cubic-bezier(0,1.2,.94,.95)}
    }
  }
}

</style>