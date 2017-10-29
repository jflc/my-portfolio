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
    </div>

    <hr class="mdc-list-divider">

    <div >
      <h1 class="mdc-typography--headline">Tech Skills</h1>

      <skill title="Back-end development" :rating="85">
        <div>
          <span><b>Languages: </b></span>
          <span>Java, Python, C/C++, SQL, Bash/Shell script</span>
        </div>
        <div>
          <span><b>Frameworks/Tools: </b></span>
          <span>Java EE, JPA, Hibernate, Jackson, JUnit</span>
        </div>
      </skill>

      <skill title="Front-end development" :rating="70">
        <div>
          <span><b>Languages: </b></span>
          <span>Javascript, HTML, CSS</span>
        </div>
        <div>
          <span><b>Frameworks/Tools: </b></span>
          <span>jQuery, AngularJS, Bootstrap</span>
        </div>
      </skill>

      <skill title="Database" :rating="75">
        <div>
          <span>Oracle, MySQL, PostgreSQL, MongoDB</span>
        </div>
      </skill>

      <skill title="Operations" :rating="60">
        <div>
          <span>JBoss, Git, SVN, Google App Engine, OpenShift, Jenkins</span>
        </div>
      </skill>

    </div>

    <hr class="mdc-list-divider">

    <div >
      <h1 class="mdc-typography--headline">Soft Skills</h1>
      <div class="mdc-list-group">
        <ul class="mdc-list">
          <li class="mdc-list-item">Teamwork</li>
          <li class="mdc-list-item">Problem solving</li>
          <li class="mdc-list-item">Quick learner</li>
          <li class="mdc-list-item">Creative thinking</li>
          <li class="mdc-list-item">Time management</li>
        </ul>
      </div>
    </div>

  </nav>
</template>

<script lang="babel">
import Skill from './Skill.vue';

export default {
  name: 'AppSide',
  components: {Skill}
}
</script>

<style lang="scss">
@import '@material/drawer/mdc-drawer';
@import '@material/list/mdc-list';

.mdc-permanent-drawer {
  width: 320px
}
</style>
