<template>
  <div class="academic-projects">
    <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Academic Projects</h1>
    <card-grid :data="academicProjects"></card-grid>
  </div>
</template>

<script lang="babel">
import CardGrid from './CardGrid.vue';

export default {
  name: 'AcademicProjects',
  data() {
    return {
      academicProjects: [
        {
          title: "Spots4Surf",
          subTitle: "(Android)",
          description: "Mobile application, that gives to the users the opportunity to share and classify the current state of the waves, in some place, with all application users and with Facebook users."
        },
        {
          title: "UAllet",
          subTitle: "(Java/Python)",
          description: "Payment system services that gives to the users more detail information about the items of their buys and provides store prices, based on users purchases."
        },
        {
          title: "VitalResponder",
          subTitle: "(Java/Android)",
          description: "Coordination and monitoring system of the fireman's on risk interventions, using Vital Jacket and mobile devices."
        },
        {
          title: "UAccess Control",
          subTitle: "(C/Python)",
          description: "Web application to control and monitor the building users access using citizen cards."
        }
      ]
    }
  },
  mounted () {
    let vm = this;
  },
  beforeDestroy () {
    let vm = this;
  },
  components: {CardGrid}
}

</script>

<style lang="scss">

</style>
