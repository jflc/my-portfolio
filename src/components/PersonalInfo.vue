<template>
<div class="personal-info">
  <nav class="mdc-list">
    <a class="mdc-list-item" :href="data.location.link" target="_blank" v-if="data.location">
      <i class="material-icons mdc-list-item__graphic" aria-hidden="true">location_city</i>
      <span v-text="data.location.name"></span>
    </a>
    <a class="mdc-list-item" v-if="data.phoneNumber">
      <i class="material-icons mdc-list-item__graphic" aria-hidden="true">phone</i>
      <span v-text="data.phoneNumber"></span>
    </a>
    <a class="mdc-list-item" :href="'mailto:' + data.email" v-if="data.email">
      <i class="material-icons mdc-list-item__graphic" aria-hidden="true">email</i>
      <span v-text="data.email"></span>
    </a>
    <a class="mdc-list-item" :href="'https://' + data.website" v-if="data.website">
      <i class="material-icons mdc-list-item__graphic" aria-hidden="true">link</i>
      <span v-text="data.website"></span>
    </a>
    <a class="mdc-list-item" :href="'https://www.linkedin.com/in/' + data.linkedIn" target="_blank" v-if="data.linkedIn">
      <i class="fab fa-linkedin fa-fw mdc-list-item__graphic" aria-hidden="true"></i>
      <span v-text="data.linkedIn"></span>
    </a>
    <a class="mdc-list-item" :href="'https://github.com/' + data.gitHub" target="_blank" v-if="data.gitHub">
      <i class="fab fa-github fa-fw mdc-list-item__graphic" aria-hidden="true"></i>
      <span v-text="data.gitHub"></span>
    </a>
  </nav>
</div>
</template>

<script lang="babel">
export default {
  name: 'PersonalInfo',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '@material/list/mdc-list';

.personal-info {
  page-break-inside: avoid;
  break-inside: avoid;
}

.personal-info > .mdc-list > .mdc-list-item {
  padding: 0px;
  margin: 8px 0px;
}

.personal-info i {
  font-size: 24px;
}

</style>
