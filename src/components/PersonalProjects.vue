<template>
  <div class="personal-projects">
    <h1 class="content-title">Personal Projects</h1>
    <card-grid :data="data"></card-grid>
  </div>
</template>

<script lang="babel">
import CardGrid from './CardGrid.vue';

export default {
  name: 'PersonalProjects',
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
