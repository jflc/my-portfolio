<template>
<div>
  <i v-bind:class="classify(0,0)" aria-hidden="true"></i>
  <i v-bind:class="classify(2,4)" aria-hidden="true"></i>
  <i v-bind:class="classify(4,6)" aria-hidden="true"></i>
  <i v-bind:class="classify(6,8)" aria-hidden="true"></i>
  <i v-bind:class="classify(8,10)" aria-hidden="true"></i>
</div>
</template>

<script lang="babel">
import {MDCSlider} from '@material/slider';

export default {
  name: 'ProgressBar',
  methods: {
    classify: function(min, max) {
      let vm = this;
      let result;
      let val = vm.value;

      if (val >= max) {
        result = "fas fa-star";
      } else if (val > min) {
        result = "fas fa-star-half-alt";
      } else {
        result = "far fa-star";
      }
      return result;
    }
  },
  props: {
    value: {
      type: Number,
      required: true,
      validator(val) {
        return val >= 1 && val <= 10;
      }
    }
  }
}
</script>

<style lang="scss">
@import '@material/slider/mdc-slider';
</style>
