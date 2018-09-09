<template>
<div class="content">

  <work-experience class="content-item"></work-experience>

  <br />

  <education class="content-item"n></education>

  <hr />

  <certifications class="content-item"></certifications>

  <br />

  <personal-projects class="content-item"></personal-projects>

  <br />

  <academic-projects class="content-item"></academic-projects>

</div>
</template>

<script lang="babel">
import WorkExperience from "./WorkExperience.vue";
import Education from "./Education.vue";
import Certifications from "./Certifications.vue";
import PersonalProjects from "./PersonalProjects.vue"
import AcademicProjects from "./AcademicProjects.vue"

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
  components: {WorkExperience, Education, Certifications, PersonalProjects, AcademicProjects}
}
</script>

<style lang="scss">

.content {
    background: #efefef;
    flex: 1 1 auto;
}

.content > .content-item {
    padding: 16px;
    page-break-inside: avoid;
}

.content > hr {
  margin: 16px;
}

</style>
