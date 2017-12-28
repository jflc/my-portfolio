<template>
<div class="personal-projects">
  <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Personal Projects</h1>
  <grid-cards :data="personalProjects"></grid-cards>
</div>
</template>

<script lang="babel">
import GridCards from './GridCards.vue';

export default {
  name: 'PersonalProjects',
  data() {
    return {
      personalProjects: [
        {
          title: "Desenrasca",
          subTitle: "Android",
          description: "Mobile application for Android devices, that gives to the users a more automatic and easy way of consuming USSD codes services from their own mobile operators."
        },
        {
          title: "Pricematch",
          subTitle: "Node.js/AngularJS",
          description: "Responsive web application, developed according to service oriented architecture (SOA), that gives to the users the possibility of monitoring almost all the prices present in the internet web pages."
        }
      ]
    }
  },
  components: {GridCards}
}
</script>

<style lang="scss">
</style>
