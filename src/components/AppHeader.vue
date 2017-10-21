<template>
  <header class="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior mdc-toolbar--flexible-space-maximized">
    <div class="mdc-toolbar__row">
      <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
        <a href="#" class="material-icons mdc-toolbar__icon--menu">menu</a>
      </section>
      <section class="mdc-toolbar__section">
        <div class="mdc-toolbar__title">
          <div>João Cardoso</div>
          <div>Software Engineer</div>
        </div>
      </section>
      <section class="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
        <a href="#" class="material-icons mdc-toolbar__icon" aria-label="Download" alt="Download">file_download</a>
        <a href="#" class="material-icons mdc-toolbar__icon" aria-label="Print this page" alt="Print this page">print</a>
      </section>
    </div>
  </header>
</template>

<script lang="babel">
import {MDCToolbar, MDCToolbarFoundation} from '@material/toolbar';

export default {
  name: 'AppHeader',
  mounted () {
    let vm = this;
    vm.headerToolbar = new MDCToolbar(vm.$el);
    vm.headerToolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
  },
  beforeDestroy () {
    let vm = this;
    vm.headerToolbar.destroy();
  }
}

</script>

<style lang="scss">
@import '@material/toolbar/mdc-toolbar';

.mdc-toolbar__row {
  background-color: var(--mdc-theme-primary-light);
}

.mdc-toolbar__title {
  color: var(--mdc-theme-text-primary-on-primary-light);
}

.mdc-toolbar__icon {
  color: var(--mdc-theme-text-icon-on-primary-light);
}

</style>
