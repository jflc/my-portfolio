<template>
  <div class="work-experience">
    <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Work Experience</h1>
    <vertical-timeline :data="workExperience"></vertical-timeline>
  </div>
</template>

<script lang="babel">
import VerticalTimeline from './VerticalTimeline.vue';

export default {
  name: 'WorkExperience',
  data() {
    return {
      workExperience: [
        {
          startPoint: "Jul 2014",
          endPoint: "Dez 2017",
          title: 'Java Developer',
          subTitle: '<a href="https://www.siemens.com" target="_blank">Siemens S.A.</a>',
          description: '<p>Design, develop, test and deploy internal web applications used by Siemens employees all over the world.</p><p>Main projects:</p><ul><li>Delegation Management: System responsible for manage all delegations inside the company on all stages like order approval, income calculation, visa process, repatriation, etc;</li><li>Template Management: SaaS application responsible for manage email and document templates, proving dynamic document/email generation to all Siemens application through REST API;</li><li>Basic Components: Set of common back-end components used in all internal applications;</li><li>Web Components: Collaborative project between internal and external services, providing a framework used to build modern UI for web/mobile applications.</li></ul>'
        },
        {
          startPoint: "Jul 2013",
          endPoint: "Jun 2014",
          title: 'Researcher',
          subTitle: '<a href="https://www.it.pt" target="_blank">IT - Institute of Telecommunications (University of Aveiro)</a>',
          description: '<p>Designing and developing a ANDSF component belonging to the Evolved Packet Core (EPC) framework from 3GPP, deploy and integration of Hotspot 2.0, and making a seamless handover between 3G and WiFi technologies.</p>'
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
  components: {VerticalTimeline}
}

</script>

<style lang="scss">
.work-experience > h1.mdc-typography--display1 {
  text-align: center;
}
</style>
