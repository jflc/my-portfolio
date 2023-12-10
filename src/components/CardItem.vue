<template>
<div class="mdc-card" >
  <section class="mdc-card__primary">
    <div class="mdc-card__image" v-if="image">
      <img :src="toImageUrl(image)" />
    </div>
    <div class="mdc-card__header">
      <h2 class="mdc-card__title " v-if="title" v-html="title"></h2>
      <h3 class="mdc-card__subtitle" v-if="subTitle" v-html="subTitle"></h3>
    </div>
  </section>
  <section class="mdc-card__secondary">
    <div class="mdc-card__description" v-if="description" v-html="description"></div>
  </section>
  <section class="mdc-card__actions" >
    <div class="mdc-chip-set" v-if="tags">
      <div class="mdc-chip" tabindex="0" v-for="tag in tags" :key="tag">
        <div class="mdc-chip__text" v-text="tag"></div>
      </div>
    </div>
  </section>
</div>
</template>

<script lang="babel">

const requireImage = require.context('../assets', false, /.*\.png$/);

export default {
  name: 'CardItem',
  props: {
    title: String,
    subTitle: String,
    image: String,
    description: String,
    tags: Array
  },
  methods: {
    toImageUrl: function (image) {
      return requireImage(`./${image}`);
    }
  }
}

</script>

<style lang="scss">
@import '@material/card/mdc-card';
@import "@material/chips/mdc-chips";

.mdc-card__primary {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.mdc-card__primary > .mdc-card__image {
  display: inline-flex;
  margin-right: 16px;
}

.mdc-card__primary > .mdc-card__image > img {
  width: 64px;
  height: auto;
  border-radius: 2px;
}

.mdc-card__description {
  white-space: pre-line;
}
</style>
