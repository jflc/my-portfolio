<template>
  <div role="progressbar" class="mdc-linear-progress">
    <div class="mdc-linear-progress__buffering-dots"></div>
    <div class="mdc-linear-progress__buffer"></div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
  </div>
</template>

<script lang="babel">
import {MDCLinearProgress, MDCLinearProgressFoundation} from '@material/linear-progress';

export default {
  name: 'SkillsProgress',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  mounted() {
    let vm = this;
    vm.linearProgress = new MDCLinearProgress(vm.$el);
    vm.linearProgress.progress = vm.value / 100.0;
  },
  beforeDestroy() {
    let vm = this;
    vm.linearProgress.destroy();
  }
}
</script>

<style lang="scss">
@import '@material/linear-progress/mdc-linear-progress';
</style>
