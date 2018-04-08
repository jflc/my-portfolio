<template>
<div class="content">

  <work-experience></work-experience>

  <br />

  <education></education>

  <hr />

  <certifications></certifications>

  <br />

  <personal-projects></personal-projects>

  <br />

  <academic-projects></academic-projects>

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
    padding: 16px;
    background: #efefef;
    flex: 1 1 auto;
}

</style>
