<template>
<div class="app-side mdc-drawer mdc-drawer--permanent">
  <div class="app-side-content">
    <personal-info :data="data.basic"></personal-info>
    <tech-skills :data="data.techSkills"></tech-skills>
    <soft-skills :data="data.softSkills"></soft-skills>
  </div>
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

.app-side-content > * {
  page-break-inside: avoid;
  break-inside: avoid;
  margin: 0px;
  padding: 16px 16px 32px 16px;
}

.app-side-content > :not(:first-child) {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

@media (min-width: 840px) {
  .app-side {
      width: 320px;
  }
}

</style>
