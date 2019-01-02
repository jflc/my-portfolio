<template>
  <main class="app-main">
    <app-side :data="data"></app-side>
    <app-content :data="data"></app-content>
  </main>
</template>

<script lang="babel">
import AppSide from './AppSide.vue';
import AppContent from './AppContent.vue';

export default {
  name: 'AppMain',
  props: {
    data: {
      type: Object,
      required: true
    }
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
