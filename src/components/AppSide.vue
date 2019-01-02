<template>
<div class="app-side mdc-drawer mdc-drawer--permanent">
  <personal-info :data="data.basic"></personal-info>
  <hr />
  <tech-skills :data="data.techSkills"></tech-skills>
  <hr />
  <soft-skills :data="data.softSkills"></soft-skills>
</div>
</template>

<script lang="babel">
import PersonalInfo from './PersonalInfo.vue';
import TechSkills from './TechSkills.vue';
import SoftSkills from './SoftSkills.vue';

export default {
  name: 'AppSide',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    PersonalInfo,
    TechSkills,
    SoftSkills
  }
}
</script>

<style lang="scss">
// @import "@material/typography/mdc-typography";
// @import "@material/theme/mdc-theme";
@import '@material/drawer/mdc-drawer';

.app-side hr {
    height: 0;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin: 16px 0;
}

@media (min-width: 1025px) {
  .app-side {
      width: 320px;
  }
}
</style>
