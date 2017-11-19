<template>
  <div id="app">
    <app-header></app-header>

    <app-main></app-main>

    <footer>
    </footer>
  </div>
</template>

<script lang="babel">
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    let vm = this;
  },
  beforeDestroy () {
    let vm = this;
  },
  components: {AppHeader,AppMain}
}
</script>

<style lang="scss">

$mdc-theme-primary: #37474f;
$mdc-theme-secondary: #546e7a;
$mdc-theme-background: #fff;

@import "@material/typography/mdc-typography";
@import "@material/theme/mdc-theme";

* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.fa {
  font-size: 24px;
}

</style>
