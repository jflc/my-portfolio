<template>
  <div class="certifications">
    <h1 class="content-title">Certifications</h1>
    <card-grid :data="data"></card-grid>
  </div>
</template>

<script lang="babel">
import CardGrid from './CardGrid.vue';

export default {
  name: 'Certifications',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {CardGrid}
}

</script>

<style lang="scss">

</style>
