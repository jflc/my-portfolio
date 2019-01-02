<template>
  <div class="work-experience">
    <h1 class="content-title">Work Experience</h1>
    <vertical-timeline :data="data"></vertical-timeline>
  </div>
</template>

<script lang="babel">
import VerticalTimeline from './VerticalTimeline.vue';

export default {
  name: 'WorkExperience',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {VerticalTimeline}
}

</script>

<style lang="scss">

</style>
