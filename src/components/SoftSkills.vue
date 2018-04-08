<template>
  <div class="soft-skills">
    <h1 class="mdc-typography--title">Soft Skills</h1>
    <div class="mdc-typography--caption">
      <bubble-chart :data="softSkills"></bubble-chart>
    </div>
  </div>
</template>

<script lang="babel">
import BubbleChart from './BubbleChart.vue';

export default {
  name: 'SoftSkills',
  data() {
    return {
      softSkills: {
        class: "mdc-theme--secondary-light",
        children: [{
            label: "Teamwork"
          },
          {
            label: "Problem solving"
          },
          {
            label: "Quick learner"
          },
          {
            label: "Creative thinking"
          },
          {
            label: "Time management"
          }
        ]
      }
    }
  },
  components: {
    BubbleChart
  }
}

</script>

<style lang="scss">
.soft-skills {
    margin: 0 16px;
}

.soft-skills .mdc-typography--title {
    text-align: center;
}
</style>
