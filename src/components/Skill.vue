<template>
  <div>
    <div class="mdc-typography--title mdc-theme--secondary">
      <span v-text="title"></span>
    </div>
    <skill-progress :value="rating"></skill-progress>
    <div class="mdc-typography--caption	mdc-theme--secondary-light">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="babel">
import SkillProgress from './SkillProgress.vue';

export default {
  name: 'Skill',
  props: {
    title: {
      type: String
    },
    rating: {
      type: Number,
      required: true
    }
  },
  components: {SkillProgress}
}
</script>

<style lang="scss">
// @import "@material/typography/mdc-typography";
// @import "@material/theme/mdc-theme";
</style>
