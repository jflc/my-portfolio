<template>
  <main class="mdc-toolbar-fixed-adjust">
    <app-side></app-side>
    <app-content></app-content>
  </main>
</template>

<script lang="babel">
import AppSide from './AppSide.vue';
import AppContent from './AppContent.vue';

export default {
  name: 'AppMain',
  mounted () {
    let vm = this;
  },
  beforeDestroy () {
    let vm = this;
  },
  components: {AppSide,AppContent}
}

</script>

<style lang="scss">

main {
  display: flex;
  flex: 1 1 auto;
  height: 100%;
}

</style>
