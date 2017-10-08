<template>
  <header class="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior mdc-toolbar--flexible-space-maximized">
    <div class="mdc-toolbar__row" style="height: 256px;">
      <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
        <a href="#" class="material-icons mdc-toolbar__icon--menu">menu</a>
        <span class="mdc-toolbar__title" style="font-size: 2.125rem;">Title</span>
      </section>
      <section class="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
        <a href="#" class="material-icons mdc-toolbar__icon" aria-label="Download" alt="Download">file_download</a>
        <a href="#" class="material-icons mdc-toolbar__icon" aria-label="Print this page" alt="Print this page">print</a>
        <a href="#" class="material-icons mdc-toolbar__icon" aria-label="Bookmark this page" alt="Bookmark this page">bookmark</a>
      </section>
    </div>
  </header>
</template>

<script>
import {MDCToolbar, MDCToolbarFoundation} from '@material/toolbar';

export default {
  name: 'appHeader',
  mounted () {
    let vm = this;
    vm.mdcEl = new MDCToolbar(vm.$el);
  },
  beforeDestroy () {
    let vm = this;
    vm.mdcEl.destroy();
  }
}

</script>

<style lang="scss">
@import '@material/toolbar/mdc-toolbar';
</style>
