<template>
  <div class="soft-skills">
    <h1 class="mdc-typography--headline6">Soft Skills</h1>
    <div class="mdc-typography--caption">
      <bubble-chart :data="data"></bubble-chart>
    </div>
  </div>
</template>

<script lang="babel">
import BubbleChart from './BubbleChart.vue';

export default {
  name: 'SoftSkills',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    BubbleChart
  }
}

</script>

<style lang="scss">
.soft-skills {
    page-break-inside: avoid;
    break-inside: avoid;
}

.soft-skills .mdc-typography--title {
    text-align: center;
}
</style>
