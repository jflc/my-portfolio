<template>
<div class="mdc-card" >
  <section class="mdc-card__primary">
    <h2 class="mdc-card__title " v-if="title" v-html="title"></h2>
    <h3 class="mdc-card__subtitle" v-if="subTitle" v-html="subTitle"></h3>
  </section>
  <section class="mdc-card__secondary">
    <div class="mdc-card__description" v-if="description" v-html="description"></div>
  </section>
  <section class="mdc-card__actions" >
    <div class="mdc-chip-set" v-if="tags">
      <div class="mdc-chip" tabindex="0" v-for="tag in tags">
        <div class="mdc-chip__text" v-text="tag"></div>
      </div>
    </div>
  </section>
</div>
</template>

<script lang="babel">

export default {
  name: 'CardItem',
  props: {
    title: String,
    subTitle: String,
    description: String,
    tags: Array
  }
}

</script>

<style lang="scss">
@import '@material/card/mdc-card';
@import "@material/chips/mdc-chips";

.mdc-card__description {
  white-space: pre-line;
}
</style>
