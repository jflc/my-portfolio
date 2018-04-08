<template>
<div class="personal-info">
  <nav class="mdc-list">
    <a class="mdc-list-item" :href="location.link" target="_blank" v-if="location">
      <i class="material-icons mdc-list-item__graphic" aria-hidden="true">location_city</i>
      <span v-text="location.name"></span>
    </a>
    <a class="mdc-list-item" v-if="phoneNumber">
      <i class="material-icons mdc-list-item__graphic" aria-hidden="true">phone</i>
      <span v-text="phoneNumber"></span>
    </a>
    <a class="mdc-list-item" :href="'mailto:' + email" v-if="email">
      <i class="material-icons mdc-list-item__graphic" aria-hidden="true">email</i>
      <span v-text="email"></span>
    </a>
    <a class="mdc-list-item" :href="'https://www.linkedin.com/in/' + linkedIn" target="_blank" v-if="linkedIn">
      <i class="fa fa-linkedin fa-fw mdc-list-item__graphic" aria-hidden="true"></i>
      <span v-text="linkedIn"></span>
    </a>
    <a class="mdc-list-item" :href="'https://github.com/' + gitHub" target="_blank" v-if="gitHub">
      <i class="fa fa-github fa-fw mdc-list-item__graphic" aria-hidden="true"></i>
      <span v-text="gitHub"></span>
    </a>
  </nav>
</div>
</template>

<script lang="babel">
export default {
  name: 'PersonalInfo',
  data() {
    return {
      location: {
        name: "Lisbon, Portugal",
        link: "https://goo.gl/maps/bgMytTFEXy32"
      },
      phoneNumber: "+351 968356501",
      email: "jflc@outlook.pt",
      linkedIn: "joaoflc",
      gitHub: "jflc"
    }
  }
}
</script>

<style lang="scss">
@import '@material/list/mdc-list';
</style>
