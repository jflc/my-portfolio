<template>
<div class="content">

  <work-experience class="content-item" :data="data.workExperience"></work-experience>

  <br />

  <education class="content-item" :data="data.education"></education>

  <hr />

  <certifications class="content-item" :data="data.certifications"></certifications>

  <!--
  <br />

  <personal-projects class="content-item" :data="data.personalProjects"></personal-projects>

  <br />

  <academic-projects class="content-item" :data="data.academicProjects"></academic-projects>
  -->

</div>
</template>

<script lang="babel">
import WorkExperience from "./WorkExperience.vue";
import Education from "./Education.vue";
import Certifications from "./Certifications.vue";
// import PersonalProjects from "./PersonalProjects.vue"
// import AcademicProjects from "./AcademicProjects.vue"

export default {
  name: 'AppContent',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  // components: {WorkExperience, Education, Certifications, PersonalProjects, AcademicProjects}
  components: {WorkExperience, Education, Certifications}
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
