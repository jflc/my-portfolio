<template>
  <div class="education">
    <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Education</h1>
    <vertical-timeline :data="education"></vertical-timeline>
  </div>
</template>

<script lang="babel">
import VerticalTimeline from './VerticalTimeline.vue';

export default {
  name: 'Education',
  data() {
    return {
      education: [
        {
          startPoint: "Sep 2007",
          endPoint: "Jun 2013",
          title: "Master's Degree in Computer Engineering and Telematics",
          subTitle: "<a href='http://www.ua.pt' target≃'_blank'>University Of Aveiro</a>",
          description: "<p>Master’s Thesis:</p><ul><li>Title: DETIboot;</li><li>Supervisors: Dr. José Manuel Neto Vieira, Dr. André Ventura da Cruz Marmôto Zúquete;</li><li>Description: Fast, wireless installation of pre-configured operating systems, with broadcast transmission and network coding (fountain codes), making it scalable for an unlimited number of consumer systems;</li><li>URL: <a href='http://hdl.handle.net/10773/11675' target='_blank'>http://hdl.handle.net/10773/11675</a></li></ul>"
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
.education > h1.mdc-typography--display1 {
  text-align: center;
}
</style>
