<template>
  <div class="personal-projects">
    <h1 class="content-title">Personal Projects</h1>
    <card-grid :data="personalProjects"></card-grid>
  </div>
</template>

<script lang="babel">
import CardGrid from './CardGrid.vue';

export default {
  name: 'PersonalProjects',
  data() {
    return {
      personalProjects: [
        {
          title: "Desenrasca",
          subTitle: "(Android)",
          description: "Mobile application for Android devices, that gives to the users a more automatic and easy way of consume USSD codes services from their own mobile operators."
        },
        {
          title: "Pricematch",
          subTitle: "(Node.js/AngularJS)",
          description: "Responsive web application, developed according to service oriented architecture (SOA), that gives to the users the possibility of monitoring almost all the prices present in the internet web pages."
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
