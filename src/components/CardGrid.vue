<template>
  <div class="card-grid mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone" v-for="(item, index) in data" :key="index">
        <div class="mdc-card" >
          <section class="mdc-card__primary">
            <h2 class="mdc-card__title " v-html="item.title"></h2>
            <h3 class="mdc-card__subtitle" v-html="item.subTitle"></h3>
          </section>
          <section class="mdc-card__secondary">
            <div class="mdc-card__description" v-html="item.description"></div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="babel">

export default {
  name: 'CardGrid',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}

</script>

<style lang="scss">
@import '@material/layout-grid/mdc-layout-grid';
@import '@material/card/mdc-card';

.card-grid .mdc-card__description {
  white-space: pre-line;
}
</style>
