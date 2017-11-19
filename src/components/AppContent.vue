<template>
<div class="content">

  <work-experience></work-experience>

  <education></education>

  <hr />

  <div>
    <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Certifications</h1>
    <div>
      <div>
        <span>Oracle Certified Associate, Java SE 8 Programmer I</span>
      </div>
      <div>
        <a href="https://www.oracle.com">Oracle</a>
      </div>
      <div>
        <span>
          An Oracle Certified Associate, Java SE 8 Programmer has demonstrated knowledge of object-oriented concepts, the Java programming language and general knowledge of Java platforms and technologies.
        </span>
      </div>
    </div>
    <div>
      <div>
        <span>Oracle Certified Professional, Java SE 8 Programmer II</span>
      </div>
      <div>
        <a href="https://www.oracle.com">Oracle</a>
      </div>
      <div>
        <span>
          An Oracle Certified Professional, Java SE 8 Programmer has validated their Java development skills by answering challenging, real-world, scenario-based questions that measure problem solving skills using Java code.
        </span>
      </div>
    </div>
  </div>

  <hr />

  <div>
    <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Personal Projects</h1>
    <div>
      <span><b>Desenrasca: </b></span>
      <span>
        Mobile application for Android devices, that gives to the users a more automatic and easy way of consume USSD codes services from their own mobile operators. (Android)
      </span>
    </div>
    <div>
      <span><b>Pricematch: </b></span>
      <span>
        Responsive web application, developed according to service oriented architecture (SOA), that gives to the users the possibility of monitoring almost all the prices present in the internet web pages. (Node.js/AngularJS)
      </span>
    </div>
  </div>

  <hr />

  <div>
    <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Academic Projects</h1>
    <div>
      <span><b>Spots4Surf: </b></span>
      <span>
        Mobile application, that gives to the users the opportunity to share and classify the current state of the waves, in some place, with all application users and with Facebook users. (Android)
      </span>
    </div>
    <div>
      <span><b>UAllet: </b></span>
      <span>
        Payment system services that gives to the users more detail information about the items of their buys and provides store prices, based on users purchases. (Java/Python)
      </span>
    </div>
    <div>
      <span><b>VitalResponder: </b></span>
      <span>
        Coordination and monitoring system of the fireman's on risk interventions, using Vital Jacket and mobile devices. (Java/Android)
      </span>
    </div>
    <div>
      <span><b>UAccess Control: </b></span>
      <span>
        Web application for control and monitor the building users access using citizen cards. (C/Python)
      </span>
    </div>
  </div>

</div>
</template>

<script lang="babel">
import WorkExperience from "./WorkExperience.vue";
import Education from "./Education.vue";

export default {
  name: 'AppContent',
  data() {
    return {
    }
  },
  mounted() {
    let vm = this;
  },
  beforeDestroy() {
    let vm = this;
  },
  components: {WorkExperience, Education}
}
</script>

<style lang="scss">
// @import "@material/typography/mdc-typography";
// @import "@material/theme/mdc-theme";
@import "@material/layout-grid/mdc-layout-grid";

.content {
    padding: 16px;
    background: #efefef;
    flex: 1 1 auto;
}

.content h1 {
    // text-align: center;
}
</style>
