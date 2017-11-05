<template>
<div class="skill">

  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner mdc-typography--title mdc-theme--primary">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" v-if="title">
        <span v-text="title" v-if="title"></span>
        <skill-progress :value="rating"></skill-progress>
      </div>
    </div>

    <div class="mdc-layout-grid__inner mdc-typography--caption" v-if="details">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" v-for="detail in details">
        <skill-details :data="detail" :class="detail.class"></skill-details>
      </div>
    </div>

    <div class="mdc-layout-grid__inner mdc-typography--caption mdc-theme--secondary" >
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <slot>
          
        </slot>
      </div>
    </div>
  </div>

</div>
</template>

<script lang="babel">
import SkillProgress from './SkillProgress.vue';
import SkillDetails from './SkillDetails.vue';

export default {
  name: 'Skill',
  props: {
    title: {
      type: String
    },
    rating: {
      type: Number,
      required: true
    },
    details: {
      type: Array
    }
  },
  components: {
    SkillProgress,
    SkillDetails
  }
}
</script>

<style lang="scss">
// @import "@material/typography/mdc-typography";
// @import "@material/theme/mdc-theme";

.skill .mdc-layout-grid {
    padding: 0;
}
</style>
