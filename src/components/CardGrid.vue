<template>
  <div class="card-grid mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone" v-for="(item, index) in data" :key="index">
        <card-item :title="item.title" :subTitle="item.subTitle" :description="item.description" :tags="item.tags"></card-item>
      </div>
    </div>
  </div>
</template>

<script lang="babel">
import CardItem from './CardItem.vue';

export default {
  name: 'CardGrid',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    CardItem
  }
}

</script>

<style lang="scss">
@import '@material/layout-grid/mdc-layout-grid';
</style>
