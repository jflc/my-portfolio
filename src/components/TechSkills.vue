<template>
<div class="tech-skills">
  <h1 class="mdc-typography--headline6">Tech Skills</h1>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner mdc-theme--primary" v-for="(ts, i) in data.children" :key="i">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <h2 class="mdc-typography--subtitle1" v-text="ts.label"></h2>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-typography--caption" v-for="(item, index) in ts.children" :key="index" >
        <span v-text="item.label"></span>
        <progress-bar :value="item.value"></progress-bar>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="babel">
import ProgressBar from './ProgressBar.vue';

export default {
  name: 'TechSkills',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    ProgressBar
  }
}
</script>

<style lang="scss">
.tech-skills {
    page-break-inside: avoid;
    margin: 0 16px;
}

.tech-skills .mdc-typography--title {
    text-align: center;
}

.tech-skills .mdc-layout-grid {
    padding: 0;
}

.tech-skills .mdc-layout-grid__inner {
    grid-gap: 16px;
    margin-bottom: 32px;
}
</style>
