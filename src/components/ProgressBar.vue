<template>
<div class="mdc-slider mdc-slider--discrete mdc-slider--display-markers" tabindex="0" role="slider"
     aria-valuemin="1" aria-valuemax="10" v-bind:aria-valuenow="value"
     data-step="1" aria-label="Select Value" aria-disabled="true">
  <div class="mdc-slider__track-container">
    <div class="mdc-slider__track"></div>
    <div class="mdc-slider__track-marker-container"></div>
  </div>
  <div class="mdc-slider__thumb-container">
    <div class="mdc-slider__pin">
      <span class="mdc-slider__pin-value-marker"></span>
    </div>
    <svg class="mdc-slider__thumb" width="21" height="21">
      <circle cx="10.5" cy="10.5" r="7.875"></circle>
    </svg>
    <div class="mdc-slider__focus-ring"></div>
  </div>
</div>
</template>

<script lang="babel">
import {MDCSlider} from '@material/slider';

export default {
  name: 'ProgressBar',
  props: {
    value: {
      type: Number,
      required: true,
      validator(val) {
        return val >= 1 && val <= 10;
      }
    }
  },
  mounted() {
    let vm = this;
    vm.slider = new MDCSlider(vm.$el);
  },
  beforeDestroy() {
    let vm = this;
    vm.slider.destroy();
  }
}
</script>

<style lang="scss">
@import '@material/slider/mdc-slider';
</style>
