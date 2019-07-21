<template>
<div class="vertical-timeline">

  <div class="vertical-timeline-item" v-for="(item, index) in data" :key="index" >
    <div class="vertical-timeline-date">
      <span v-text="item.endPoint"></span>
      <span v-text="item.startPoint"></span>
    </div>
    <div class="vertical-timeline-mark"></div>
    <div class="vertical-timeline-content">
      <card-item :title="item.title" :subTitle="item.subTitle" :description="item.description" :tags="item.tags"></card-item>
    </div>
  </div>

</div>
</template>

<script lang="babel">
import CardItem from './CardItem.vue';

export default {
  name: 'VerticalTimeline',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    CardItem
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
    left: 90px;
    margin: 0 auto;
    border: 2px dashed var(--mdc-theme-secondary);
}

/* Container around content */
.vertical-timeline-item {
    page-break-inside: avoid;
    break-inside: avoid;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    padding: 40px 0px;
}

/* The container date */
.vertical-timeline-date {
    min-width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
}

/* The container mark */
.vertical-timeline-mark {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
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

/* timeline at the middle */
@media (min-width: 1025px) {
  .vertical-timeline::after {
      right: 90px;
  }

  .vertical-timeline-item {
      padding: 40px 20px;
  }

  .vertical-timeline-item:nth-child(even) {
      flex-direction: row-reverse;
  }

  .vertical-timeline-date {
      flex: 1 0 0;
  }

  .vertical-timeline-item:nth-child(even) .vertical-timeline-date {
      text-align: left;
  }

  .vertical-timeline-mark {
      margin: 0 40px;
  }
}

</style>
