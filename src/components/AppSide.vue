<template>
<div class="mdc-permanent-drawer">
  <personal-info></personal-info>
  <hr />
  <tech-skills></tech-skills>
  <hr />
  <soft-skills></soft-skills>
</div>
</template>

<script lang="babel">
import PersonalInfo from './PersonalInfo.vue';
import TechSkills from './TechSkills.vue';
import SoftSkills from './SoftSkills.vue';

export default {
  name: 'AppSide',
  data() {
    return {

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


.mdc-permanent-drawer {
    width: 320px;
}

.mdc-permanent-drawer hr {
    height: 0;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin: 16px 0;
}

</style>
