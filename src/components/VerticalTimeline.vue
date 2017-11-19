<template>
<div class="vertical-timeline">

  <div class="vertical-timeline-item" v-for="item in data">
    <div class="vertical-timeline-date">
      <span v-text="item.endPoint"></span>
      <span v-text="item.startPoint"></span>
    </div>
    <div class="vertical-timeline-mark"></div>
    <div class="vertical-timeline-content">
      <div class="mdc-card">
        <section class="mdc-card__primary">
          <h1 class="mdc-card__title mdc-card__title--large" v-html="item.title"></h1>
          <h2 class="mdc-card__subtitle" v-html="item.subTitle"></h2>
        </section>
        <section class="mdc-card__supporting-text">
          <div v-html="item.description"></div>
        </section>
      </div>
    </div>
  </div>

</div>
</template>

<script lang="babel">
export default {
  name: 'VerticalTimeline',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  mounted() {
    let vm = this;
  },
  beforeDestroy() {
    let vm = this;
  }
}
</script>

<style lang="scss">
@import '@material/card/mdc-card';

.vertical-timeline {
    position: relative;
    margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.vertical-timeline::after {
    content: '';
    position: absolute;
    width: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    border: 2px dashed var(--mdc-theme-secondary);
}

/* Container around content */
.vertical-timeline-item {
    display: flex;
    align-items: stretch;
    padding: 40px;
}

.vertical-timeline-item:nth-child(odd) {
    flex-direction: row;
}

.vertical-timeline-item:nth-child(even) {
    flex-direction: row-reverse;
}

/* The container date */
.vertical-timeline-date {
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.vertical-timeline-item:nth-child(odd) .vertical-timeline-date {
    text-align: right;
}

.vertical-timeline-item:nth-child(even) .vertical-timeline-date {
    text-align: left;
}

/* The container mark */
.vertical-timeline-mark {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 40px;
    width: 4px;
    background: var(--mdc-theme-secondary);
    z-index: 1;
}

.vertical-timeline-mark::after,
.vertical-timeline-mark::before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 4px solid var(--mdc-theme-secondary);

}

.vertical-timeline-mark::before {
    background: var(--mdc-theme-secondary);
    box-shadow: 0 -1px 2px 4px #efefef;
}

.vertical-timeline-mark::after {
    background: #efefef;
    box-shadow: 0 1px 2px 4px #efefef;
}

/* The container content */
.vertical-timeline-content {
    flex: 1 0 0;
}

/* The content card */
.vertical-timeline-content .mdc-card {
    background-color: white;
}
</style>
