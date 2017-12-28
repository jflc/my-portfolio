<template>
<div class="certifications">
  <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Certifications</h1>
  <grid-cards :data="certifications"></grid-cards>
</div>
</template>

<script lang="babel">
import GridCards from './GridCards.vue';

export default {
  name: 'Certifications',
  data() {
    return {
      certifications: [
        {
          title: "Oracle Certified Associate, Java SE 8 Programmer I",
          subTitle: "<a href='https://www.oracle.com' target='_blank'>Oracle</a>",
          description: "An Oracle Certified Associate, Java SE 8 Programmer has demonstrated knowledge of object-oriented concepts, the Java programming language and general knowledge of Java platforms and technologies."
        },
        {
          title: "Oracle Certified Professional, Java SE 8 Programmer II",
          subTitle: "<a href='https://www.oracle.com' target='_blank'>Oracle</a>",
          description: "An Oracle Certified Professional, Java SE 8 Programmer has validated their Java development skills by answering challenging, real-world, scenario-based questions that measure problem solving skills using Java code."
        }
      ]
    }
  },
  components: {GridCards}
}
</script>

<style lang="scss">
</style>
