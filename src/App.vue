<template>
  <div id="app">
    <app-header></app-header>
    <app-main></app-main>
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
  components: {AppHeader,AppMain}
}
</script>

<style lang="scss">

$mdc-theme-primary: #37474f;
//$mdc-theme-secondary: #546e7a;
$mdc-theme-secondary: #6e8e9e;
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

/* The card content */
.mdc-card {
  word-break: break-word;
}

.mdc-card__primary {
  padding: 16px;
}

.mdc-card__secondary {
  padding: 16px;
}

.mdc-card__title {
  @extend .mdc-typography--headline6;
  margin: 0px;
}

.mdc-card__subtitle {
  @extend .mdc-typography--subtitle1;
  margin: 0px;
}

.mdc-card__description {
  @extend .mdc-typography--body1;
  margin: 0px;
}

.content-title {
    @extend .mdc-typography--headline4, .mdc-theme--text-secondary-on-light;
    text-align: center;
}

@media print {
	.page-break-on-print	{
    display: block;
    page-break-before: always;
  }

  .hide-on-print	{
    visibility: hidden;
  }
}

</style>
