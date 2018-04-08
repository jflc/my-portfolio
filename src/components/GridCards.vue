<template>
<div class="grid-cards">
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell" v-for="item in data">
        <div class="mdc-card">
          <section class="mdc-card__primary">
            <h1 class="mdc-card__title mdc-card__title--large" v-html="item.title"></h1>
            <h2 class="mdc-card__subtitle" v-html="item.subTitle"></h2>
          </section>
          <section class="mdc-card__supporting-text">
            <div v-html="item.description"></div>
          </section>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="babel">
export default {
  name: 'GridCards',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  mounted() {
    let vm = this;
  },
  beforeDestroy() {
    let vm = this;
  }
}
</script>

<style lang="scss">
@import '@material/card/mdc-card';
@import '@material/layout-grid/mdc-layout-grid';

/* The content card */
.grid-cards .mdc-card {
    background-color: white;
}
</style>
