<template>
<header v-on:MDCToolbar:change="updateData" class="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior mdc-toolbar--flexible-space-maximized">
  <div class="mdc-toolbar__row">
    <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
      <div class="mdc-toolbar__title">
        <div class="toolbar-avatar">
          <img src="../assets/avatar.png" v-bind:style="{ opacity:  imgOpacity, margin: imgMargin }" />
          <span v-bind:style="{ margin:  nameMargin }">João Cardoso</span>
        </div>
      </div>
    </section>
    <section class="mdc-toolbar__section">
      <div class="mdc-toolbar__title toolbar-job-title">
        <span v-bind:style="{ opacity:  jobOpacity }">Software Engineer</span>
      </div>
    </section>
    <section class="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
      <a href="#" class="material-icons mdc-toolbar__icon" aria-label="Download" alt="Download">file_download</a>
      <a href="#" class="material-icons mdc-toolbar__icon" aria-label="Print this page" alt="Print this page">print</a>
    </section>
  </div>
</header>
</template>

<script lang="babel">
import {
  MDCToolbar,
  MDCToolbarFoundation
} from '@material/toolbar';

export default {
  name: 'AppHeader',
  data () {
    return {
      imgOpacity: 1,
      imgMargin: '1em auto',
      nameMargin: 'auto 0em',
      jobOpacity: 1
    };
  },
  methods: {
    updateData: function (event) {
      let vm = this;
      const flexibleExpansionRatio = event.detail.flexibleExpansionRatio;
      vm.imgOpacity = flexibleExpansionRatio > 0 && flexibleExpansionRatio < 1 ? flexibleExpansionRatio : 1;
      vm.imgMargin = flexibleExpansionRatio +'em auto';
      vm.nameMargin = 'auto ' +  (1-flexibleExpansionRatio) + 'em';
      vm.jobOpacity = flexibleExpansionRatio;
    }
  },
  mounted() {
    let vm = this;
    vm.headerToolbar = new MDCToolbar(vm.$el);
    vm.headerToolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
  },
  beforeDestroy() {
    let vm = this;
    vm.headerToolbar.destroy();
  }
}
</script>

<style lang="scss">
@import '@material/toolbar/mdc-toolbar';

.toolbar-avatar {
    display: flex;
    flex-direction: column;
    // align-items: center;
}

.toolbar-avatar img {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    // box-shadow: 0 0 2px 2px black, 0 2px 6px 4px rgba(0,0,0,.2);
    border: 2px solid #fff;
    box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15), 0 1.5px 3px 0 rgba(0,0,0,.15);
}

.toolbar-job-title {
    margin: auto;
}

.mdc-toolbar__row {
    background-color: var(--mdc-theme-background);
}
.mdc-toolbar__row:first-child::after {
    background-image: url("../assets/blue-grey-pentagonal-background.png");
    // background-image: url("../assets/red-pentagonal-background.png");
    background-size: cover;
    background-position: center;
}

.mdc-toolbar__title {
    color: var(--mdc-theme-text-primary-on-dark);
}

.mdc-toolbar__icon {
    color: var(--mdc-theme-text-icon-on-dark);
}

.mdc-toolbar--flexible-space-minimized .mdc-toolbar__title {
    color: var(--mdc-theme-text-primary-on-background);
}

.mdc-toolbar--flexible-space-minimized .mdc-toolbar__icon {
    color: var(--mdc-theme-text-icon-on-background);
}

.mdc-toolbar--flexible-space-minimized .toolbar-job-title {
    display: none;
}

.mdc-toolbar--flexible-space-minimized .toolbar-avatar {
    flex-direction: row;
}

.mdc-toolbar--flexible-space-minimized .toolbar-avatar img {
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid #000;
}

</style>
