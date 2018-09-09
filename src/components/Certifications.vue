<template>
  <div class="certifications">
    <h1 class="content-title">Certifications</h1>
    <card-grid :data="certifications"></card-grid>
  </div>
</template>

<script lang="babel">
import CardGrid from './CardGrid.vue';

export default {
  name: 'Certifications',
  data() {
    return {
      certifications: [
        {
          title: "Oracle Certified Associate (OCA), Java SE 8 Programmer I",
          subTitle: "<a href='https://www.oracle.com' target≃'_blank'>Oracle</a>",
          description: "An Oracle Certified Associate, Java SE 8 Programmer has demonstrated knowledge of object-oriented concepts, the Java programming language and general knowledge of Java platforms and technologies."
        },
        {
          title: "Oracle Certified Professional (OCP), Java SE 8 Programmer II",
          subTitle: "<a href='https://www.oracle.com' target≃'_blank'>Oracle</a>",
          description: "An Oracle Certified Professional, Java SE 8 Programmer has validated their Java development skills by answering challenging, real-world, scenario-based questions that measure problem solving skills using Java code."
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
.certifications {
  page-break-inside: avoid;
}
</style>
