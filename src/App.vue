<template>
  <div id="app">
    <header ref="header" class="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior mdc-toolbar--flexible-space-maximized">
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

    <div class="mdc-toolbar-fixed-adjust middle" style="margin-top: 256px;">
      <app-side></app-side>
      <main>
        <app-content></app-content>
        <app-content></app-content>
      </main>
    </div>

    <footer>
    </footer>
  </div>
</template>

<script lang="babel">
import {MDCToolbar, MDCToolbarFoundation} from '@material/toolbar';
import AppSide from './components/AppSide.vue';
import AppContent from './components/AppContent.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    let vm = this;
    vm.header = new MDCToolbar(vm.$refs.header);
  },
  beforeDestroy () {
    let vm = this;
    vm.header.destroy();
  },
  components: {AppSide,AppContent}
}
</script>

<style lang="scss">
@import '@material/toolbar/mdc-toolbar';

.middle {
  display: flex;
  flex: 1 1 auto;
  height: 100%;
}

main {
  flex: 1 1 auto;
}
</style>
