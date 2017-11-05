<template>
<div class="content">

  <div>
    <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Work Experience</h1>
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
          <span>07/2014 - Present</span>
        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-10">
          <div>
            <span>Java Developer</span>
          </div>
          <div>
            <a href="https://www.siemens.com">Siemens S.A.</a>
          </div>
          <div>
            <span>
              Design, develop, test and deploy internal web applications used by Siemens employees all over the world.
            </span>
          </div>
          <div>
            <span>
              Main projects:
Delegation Management: System responsible for manage all
delegations inside the company on all stages like order approval,
income calculation, visa process, repatriation, etc;
Template Management: SaaS application responsible for manage
email and document templates, proving dynamic document/email
generation to all Siemens application through REST API;
Basic Components: Set of common back-end components used in all
internal applications;
Web Components: Collaborative project between internal and
external services, providing a framework used to build modern UI for
web/mobile applications.
            </span>
          </div>
        </div>
      </div>
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
          <span>07/2013 - 06/2014</span>
        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-10">
          <div>
            <span>Researcher</span>
          </div>
          <div>
            <a href="https://www.it.pt">IT - Institute of Telecommunications (University of Aveiro)</a>
          </div>
          <div>
            <span>
              Designing and developing a ANDSF component belonging to the Evolved
Packet Core (EPC) framework from 3GPP, deploy and integration of
Hotspot 2.0, and making a seamless handover between 3G and WiFi
technologies.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr />

  <div>
    <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Education</h1>
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
          <span>09/2007 - 06/2013</span>
        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-10">
          <div>
            <span>Master's Degree in Computer Engineering and Telematics</span>
          </div>
          <div>
            <a href="http://www.ua.pt">University Of Aveiro</a>
          </div>
          <div>
            <span>
              Master’s Thesis:
Title: DETIboot
Supervisors: Dr. José Manuel Neto Vieira, Dr. André Ventura da Cruz
Marmôto Zúquete
Description: Fast, wireless installation of pre-configured operating
systems, with broadcast transmission and network coding (fountain
codes), making it scalable for an unlimited number of consumer
systems
URL: http://hdl.handle.net/10773/11675
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr />

  <div>
    <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Certifications</h1>
    <div>
      <div>
        <span>Oracle Certified Associate, Java SE 8 Programmer I</span>
      </div>
      <div>
        <a href="https://www.oracle.com">Oracle</a>
      </div>
      <div>
        <span>
          An Oracle Certified Associate, Java SE 8 Programmer has demonstrated knowledge of object-oriented concepts, the Java programming language and general knowledge of Java platforms and technologies.
        </span>
      </div>
    </div>
    <div>
      <div>
        <span>Oracle Certified Professional, Java SE 8 Programmer II</span>
      </div>
      <div>
        <a href="https://www.oracle.com">Oracle</a>
      </div>
      <div>
        <span>
          An Oracle Certified Professional, Java SE 8 Programmer has validated their Java development skills by answering challenging, real-world, scenario-based questions that measure problem solving skills using Java code.
        </span>
      </div>
    </div>
  </div>

  <hr />

  <div>
    <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Personal Projects</h1>
    <div>
      <span><b>Desenrasca: </b></span>
      <span>
        Mobile application for Android devices, that gives to the users a more automatic and easy way of consume USSD codes services from their own mobile operators. (Android)
      </span>
    </div>
    <div>
      <span><b>Pricematch: </b></span>
      <span>
        Responsive web application, developed according to service oriented architecture (SOA), that gives to the users the possibility of monitoring almost all the prices present in the internet web pages. (Node.js/AngularJS)
      </span>
    </div>
  </div>

  <hr />

  <div>
    <h1 class="mdc-typography--display1 mdc-theme--text-secondary-on-light">Academic Projects</h1>
    <div>
      <span><b>Spots4Surf: </b></span>
      <span>
        Mobile application, that gives to the users the opportunity to share and classify the current state of the waves, in some place, with all application users and with Facebook users. (Android)
      </span>
    </div>
    <div>
      <span><b>UAllet: </b></span>
      <span>
        Payment system services that gives to the users more detail information about the items of their buys and provides store prices, based on users purchases. (Java/Python)
      </span>
    </div>
    <div>
      <span><b>VitalResponder: </b></span>
      <span>
        Coordination and monitoring system of the fireman's on risk interventions, using Vital Jacket and mobile devices. (Java/Android)
      </span>
    </div>
    <div>
      <span><b>UAccess Control: </b></span>
      <span>
        Web application for control and monitor the building users access using citizen cards. (C/Python)
      </span>
    </div>
  </div>

</div>
</template>

<script lang="babel">
import SkillDetails from './SkillDetails.vue';

export default {
  name: 'AppContent',
  data() {
    return {
      languages: {
        label: "Languages",
        children: [{
            label: "Java",
            value: 70,
          },
          {
            label: "Python",
            value: 20
          },
          {
            label: "C/C++",
            value: 10
          },
        ]
      },
      frameworks: {
        label: "Frameworks",
        children: [{
            label: "Java EE",
            value: 20
          },
          {
            label: "JPA",
            value: 20
          },
          {
            label: "Hibernate",
            value: 20
          },
          {
            label: "Jackson",
            value: 20
          },
          {
            label: "JUnit",
            value: 20
          }
        ]
      }
    }
  },
  mounted() {
    let vm = this;
  },
  beforeDestroy() {
    let vm = this;
  },
  components: {
    SkillDetails
  }
}
</script>

<style lang="scss">
// @import "@material/typography/mdc-typography";
// @import "@material/theme/mdc-theme";
@import "@material/layout-grid/mdc-layout-grid";

.content {
    padding: 16px;
    background: rgba(0,0,0,.05);
    flex: 1 1 auto;
}

.content h1 {
    text-align: center;
}
</style>
