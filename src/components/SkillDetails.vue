<template>
<div></div>
</template>

<script lang="babel">
import * as d3 from "d3";

export default {
  name: 'SkillDetails',
  props: {
    data: {
      type: Object,
      required: true
    },
    aspectRatio: {
      type: Number,
      default: 4 / 3,
    },
    padding: {
      type: Number,
      default: 2
    },
    strength: {
      type: Number,
      default: 0.1
    }
  },
  methods: {
    updateNodes: function(nodes) {
      nodes.attr("transform", (d) => "translate(" + d.x + "," + d.y + ")")
        .select('circle')
        .attr('r', d => d.r);
    }
  },
  mounted() {
    let vm = this;

    const width = vm.$el.clientWidth,
      height = width / vm.aspectRatio;

    vm.svg = d3.select(vm.$el).append("svg")
      .attr("width", width)
      .attr("height", height);

    let pack = d3.pack()
      .size([width, height])
      .padding(vm.padding);

    let root = d3.hierarchy(vm.data)
      .sum((d) => d.value)
      // .sort((a, b) => a.value - b.value)
      .each((d) => {
        d.text = d.data.label;
        d.class = d.data.class || (d.parent && d.parent.class);
      });
    console.log('root: ', root);

    // pack = pack(root);
    // let data = root.children;
    let nodes = pack(root).leaves();
    root.r = root.r + vm.padding - d3.max(nodes, d => d.r);
    console.log('nodes: ', nodes);

    // use the force
    let simulation = d3.forceSimulation(nodes)
      // .velocityDecay(0.1)
      // .alpha(0.5)
      // .force('link', d3.forceLink().id(d => d.id))
      .force('charge', d3.forceManyBody())
      // .force('charge', d3.forceManyBody().strength(d => -vm.strength * Math.pow(d.r, 2.0)))
      // .force('charge', d3.forceManyBody().strength(-10).distanceMin(10))
      // .force("center", d3.forceCenter(center.x, center.y))
      .force('collide', d3.forceCollide(d => d.r))
      // .force('collide', d3.forceCollide(d => d.r + vm.padding))
      // .force('center', d3.forceCenter())
      .force('center', d3.forceRadial(root.r, root.x, root.y))
      // .force('center', d3.forceRadial(root.r, center.x, center.y).strength(vm.strength))
      // .force('x', d3.forceX(center.x).strength(strength))
      // .force('y', d3.forceY(center.y).strength(strength));
      .on('tick', () => this.updateNodes(leaf));

    let rootCircle = vm.svg.append("g")
      .attr("class", "node node-root " + root.class)

    rootCircle
      .append("circle")
      .attr("cx", root.x)
      .attr("cy", root.y)
      .attr("r", root.r);

    let leaf = vm.svg.selectAll(".node.node-leaf").data(nodes).enter().append("g")
      .attr("class", (d) => "node node-leaf " + d.class)
    // .attr("transform", (d) => "translate(" + d.x + "," + (d.y - vm.padding) + ")");

    leaf.append("circle")
      .attr("r", (d) => d.r);

    leaf.append("text")
      .text((d) => d.text);

    leaf.exit().remove();

    let rootText = vm.svg.append("g")
      .attr("class", "node node-root " + root.class)

    rootText.append("text")
      .attr("x", root.x)
      .attr("y", root.y)
      .text(root.text);

  },
  beforeDestroy() {
    let vm = this;
    vm.svg.remove();
  }
}
</script>

<style lang="scss">
.node text{
    text-anchor: middle;
    alignment-baseline: middle;
    font-weight: bold;
}

.node-root circle {
    fill-opacity: 0.25;
}

.node-root text {
    fill-opacity: 0.75;
}

.node-leaf circle {
    stroke: var(--mdc-theme-background);
    stroke-width: 3px;
}

.node.mdc-theme--primary circle {
    fill: var(--mdc-theme-primary);
}

.node.mdc-theme--primary text {
    fill: var(--mdc-theme-text-primary-on-primary);
}

.node.mdc-theme--primary-light circle {
    fill: var(--mdc-theme-primary-light);
}

.node.mdc-theme--primary-light text {
    fill: var(--mdc-theme-text-primary-on-light);
}

.node.mdc-theme--primary-dark circle {
    fill: var(--mdc-theme-primary-dark);
}

.node.mdc-theme--primary-dark text {
    fill: var(--mdc-theme-text-primary-on-dark);
}

.node.mdc-theme--secondary circle {
    fill: var(--mdc-theme-secondary);
}

.node.mdc-theme--secondary text {
    fill: var(--mdc-theme-text-secondary-on-secondary);
}

.node.mdc-theme--secondary-light circle {
    fill: var(--mdc-theme-secondary-light);
}

.node.mdc-theme--secondary-light text {
    fill: var(--mdc-theme-text-secondary-on-light);
}

.node.mdc-theme--secondary-dark circle {
    fill: var(--mdc-theme-secondary-dark);
}

.node.mdc-theme--secondary-dark text {
    fill: var(--mdc-theme-text-secondary-on-dark);
}
</style>
