<template>
  <div class="education">
    <h1 class="content-title">Education</h1>
    <vertical-timeline :data="data"></vertical-timeline>
  </div>
</template>

<script lang="babel">
import VerticalTimeline from './VerticalTimeline.vue';

export default {
  name: 'Education',
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
