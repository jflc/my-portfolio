<template>
  <div class="academic-projects">
    <h1 class="content-title">Academic Projects</h1>
    <card-grid :data="data"></card-grid>
  </div>
</template>

<script lang="babel">
import CardGrid from './CardGrid.vue';

export default {
  name: 'AcademicProjects',
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
