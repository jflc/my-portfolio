<template>
  <nav class="mdc-permanent-drawer">
    <div class="mdc-list-group">
      <nav class="mdc-list">
        <a class="mdc-list-item" href="https://goo.gl/maps/bgMytTFEXy32" target="_blank">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">location_city</i>Lisbon, Portugal
        </a>
        <a class="mdc-list-item" >
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">phone</i>+351 968356501
        </a>
        <a class="mdc-list-item" href="mailto:jflc@outlook.pt">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">email</i>jflc@outlook.pt
        </a>
        <a class="mdc-list-item" href="https://www.linkedin.com/in/joaoflc" target="_blank">
          <i class="fa fa-linkedin fa-fw mdc-list-item__start-detail" aria-hidden="true"></i>joaoflc
        </a>
        <a class="mdc-list-item" href="https://github.com/jflc" target="_blank">
          <i class="fa fa-github fa-fw mdc-list-item__start-detail" aria-hidden="true"></i>jflc
        </a>
      </nav>

      <hr class="mdc-list-divider">

      <div class="mdc-list-group">
        <h3>Skills</h3>
        <ul class="mdc-list">
          <li class="mdc-list-item">
            <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">code</i>Back-end
          </li>
        </ul>
      </div>

      <hr class="mdc-list-divider">

      <nav class="mdc-list">
        <a class="mdc-list-item mdc-permanent-drawer--selected" href="#">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
        </a>
        <a class="mdc-list-item" href="#">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
        </a>
        <a class="mdc-list-item" href="#">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">send</i>Sent Mail
        </a>
        <a class="mdc-list-item" href="#">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">drafts</i>Drafts
        </a>
      </nav>

      <hr class="mdc-list-divider">

      <nav class="mdc-list">
        <a class="mdc-list-item" href="#">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">email</i>All Mail
        </a>
        <a class="mdc-list-item" href="#">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">delete</i>Trash
        </a>
        <a class="mdc-list-item" href="#">
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">report</i>Spam
        </a>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppSide',
}
</script>

<style lang="scss">
@import '@material/drawer/mdc-drawer';
@import '@material/list/mdc-list';
</style>
