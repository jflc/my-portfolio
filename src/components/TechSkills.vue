<template>
<div class="tech-skills">
  <h1 class="mdc-typography--headline6">Tech Skills</h1>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner mdc-theme--primary" v-for="ts in techSkills.children">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <h2 class="mdc-typography--subtitle1" v-text="ts.label"></h2>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-typography--caption" v-for="item in ts.children">
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
  data() {
    return {
      techSkills: {
        class: "mdc-theme--primary-light",
        children: [{
            label: "Languages",
            children: [{
                label: "Java",
                value: 85,
              },
              {
                label: "JavaScript",
                value: 70,
              },
              {
                label: "HTML/CSS",
                value: 60,
              },
              {
                label: "Bash/Shell",
                value: 60
              },
              {
                label: "Kotlin",
                value: 55
              },
              {
                label: "Python",
                value: 50
              },
              {
                label: "C/C++",
                value: 25
              },
              {
                label: "Rust",
                value: 20
              }
            ]
          },
          {
            label: "Frameworks/Tools",
            children: [{
                label: "Java EE",
                value: 80
              },
              {
                label: "Spring",
                value: 75
              },
              {
                label: "JPA",
                value: 70
              },
              {
                label: "Hibernate",
                value: 65
              },
              {
                label: "JUnit",
                value: 75
              },
              {
                label: "Bootstrap",
                value: 60
              },
              {
                label: "AngularJS",
                value: 60
              },
              {
                label: "Vue.js",
                value: 20
              },
              {
                label: "jQuery",
                value: 50
              },
              {
                label: "Git",
                value: 75,
              },
              {
                label: "SVN",
                value: 65
              },
              {
                label: "Jenkins",
                value: 65
              },
              {
                label: "Docker",
                value: 50
              },
              {
                label: "PCF",
                value: 60
              }
            ]
          },
          {
            label: "Databases",
            children: [{
                label: "Oracle",
                value: 65,
              },
              {
                label: "PostgreSQL",
                value: 60
              },
              {
                label: "MySQL",
                value: 45,
              },
              {
                label: "MongoDB",
                value: 25
              }
            ]
          }
        ]
      }
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
