<script setup>
import { ref, onMounted, watch } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import useDragAndDrop from "@/tools/useDnD";
import Sidebar from "@/components/Sidebar.vue";

const { onConnect, addEdges } = useVueFlow();
const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop();

// 定義node節點
//const nodes = ref([]);
const nodes = ref([
  {
    id: "dndnode_6",
    type: "input",
    dimensions: { width: 150, height: 39 },
    computedPosition: { x: 489.203125, y: 90.125, z: 0 },
    handleBounds: {
      source: [
        {
          id: null,
          position: "bottom",
          nodeId: "dndnode_6",
          type: "source",
          x: 71,
          y: 33.5,
          width: 8,
          height: 8,
        },
      ],
      target: [],
    },
    selected: false,
    dragging: false,
    resizing: false,
    initialized: false,
    isParent: false,
    position: { x: 489.203125, y: 90.125 },
    data: { label: "dndnode_6" },
    events: {},
  },
  {
    id: "dndnode_7",
    type: "default",
    dimensions: { width: 150, height: 39 },
    computedPosition: { x: 474.203125, y: 198.625, z: 0 },
    handleBounds: {
      source: [
        {
          id: null,
          position: "bottom",
          nodeId: "dndnode_7",
          type: "source",
          x: 71,
          y: 33.5,
          width: 8,
          height: 8,
        },
      ],
      target: [
        {
          id: null,
          position: "top",
          nodeId: "dndnode_7",
          type: "target",
          x: 71,
          y: -3,
          width: 8,
          height: 8,
        },
      ],
    },
    selected: false,
    dragging: false,
    resizing: false,
    initialized: false,
    isParent: false,
    position: { x: 474.203125, y: 198.625 },
    data: { label: "dndnode_7" },
    events: {},
  },
  {
    id: "dndnode_8",
    type: "output",
    dimensions: { width: 150, height: 39 },
    computedPosition: { x: 472.203125, y: 276.625, z: 1000 },
    handleBounds: {
      source: [],
      target: [
        {
          id: null,
          position: "top",
          nodeId: "dndnode_8",
          type: "target",
          x: 71,
          y: -3,
          width: 8,
          height: 8,
        },
      ],
    },
    selected: true,
    dragging: false,
    resizing: false,
    initialized: false,
    isParent: false,
    position: { x: 472.203125, y: 276.625 },
    data: { label: "dndnode_8" },
    events: {},
  },
]);
const edges = ref([
  {
    id: "vueflow__edge-dndnode_6-dndnode_7",
    type: "default",
    source: "dndnode_6",
    target: "dndnode_7",
    sourceHandle: null,
    targetHandle: null,
    data: {},
    events: {},
    label: "",
    sourceNode: {
      id: "dndnode_6",
      type: "input",
      dimensions: { width: 150, height: 39 },
      computedPosition: { x: 489.203125, y: 90.125, z: 0 },
      handleBounds: {
        source: [
          {
            id: null,
            position: "bottom",
            nodeId: "dndnode_6",
            type: "source",
            x: 71,
            y: 33.5,
            width: 8,
            height: 8,
          },
        ],
        target: [],
      },
      selected: false,
      dragging: false,
      resizing: false,
      initialized: false,
      isParent: false,
      position: { x: 489.203125, y: 90.125 },
      data: { label: "dndnode_6" },
      events: {},
    },
    targetNode: {
      id: "dndnode_7",
      type: "default",
      dimensions: { width: 150, height: 39 },
      computedPosition: { x: 474.203125, y: 198.625, z: 0 },
      handleBounds: {
        source: [
          {
            id: null,
            position: "bottom",
            nodeId: "dndnode_7",
            type: "source",
            x: 71,
            y: 33.5,
            width: 8,
            height: 8,
          },
        ],
        target: [
          {
            id: null,
            position: "top",
            nodeId: "dndnode_7",
            type: "target",
            x: 71,
            y: -3,
            width: 8,
            height: 8,
          },
        ],
      },
      selected: false,
      dragging: false,
      resizing: false,
      initialized: false,
      isParent: false,
      position: { x: 474.203125, y: 198.625 },
      data: { label: "dndnode_7" },
      events: {},
    },
    sourceX: 564.203125,
    sourceY: 131.625,
    targetX: 549.203125,
    targetY: 195.625,
  },
  {
    id: "vueflow__edge-dndnode_7-dndnode_8",
    type: "default",
    source: "dndnode_7",
    target: "dndnode_8",
    sourceHandle: null,
    targetHandle: null,
    data: {},
    events: {},
    label: "",
    sourceNode: {
      id: "dndnode_7",
      type: "default",
      dimensions: { width: 150, height: 39 },
      computedPosition: { x: 474.203125, y: 198.625, z: 0 },
      handleBounds: {
        source: [
          {
            id: null,
            position: "bottom",
            nodeId: "dndnode_7",
            type: "source",
            x: 71,
            y: 33.5,
            width: 8,
            height: 8,
          },
        ],
        target: [
          {
            id: null,
            position: "top",
            nodeId: "dndnode_7",
            type: "target",
            x: 71,
            y: -3,
            width: 8,
            height: 8,
          },
        ],
      },
      selected: false,
      dragging: false,
      resizing: false,
      initialized: false,
      isParent: false,
      position: { x: 474.203125, y: 198.625 },
      data: { label: "dndnode_7" },
      events: {},
    },
    targetNode: {
      id: "dndnode_8",
      type: "output",
      dimensions: { width: 150, height: 39 },
      computedPosition: { x: 472.203125, y: 276.625, z: 1000 },
      handleBounds: {
        source: [],
        target: [
          {
            id: null,
            position: "top",
            nodeId: "dndnode_8",
            type: "target",
            x: 71,
            y: -3,
            width: 8,
            height: 8,
          },
        ],
      },
      selected: true,
      dragging: false,
      resizing: false,
      initialized: false,
      isParent: false,
      position: { x: 472.203125, y: 276.625 },
      data: { label: "dndnode_8" },
      events: {},
    },
    sourceX: 549.203125,
    sourceY: 240.125,
    targetX: 547.203125,
    targetY: 273.625,
  },
]);
// const edges = ref([
//   { id: "e1-2", source: "1", target: "2", animated: true },
//   { id: "e1-3", source: "1", target: "3" },
// ]);
onConnect(addEdges);
</script>

<template>
  <div id="index-page">
    <h1 style="text-align: center; color: #fff">Workflow</h1>
    <div class="counter" @drop="onDrop">
      <VueFlow
        v-model:nodes="nodes"
        v-model:edges="edges"
        @dragover="onDragOver"
        @dragleave="onDragLeave"
      >
        <Background :size="2" :gap="20" pattern-color="#BDBDBD" />
      </VueFlow>
    </div>
    <Sidebar />
    <div style="display: flex; gap: 1%; margin: 50px; max-height: 300px">
      <div class="dataC">
        <h2>nodes</h2>
        <p class="data">{{ nodes }}</p>
      </div>
      <div class="dataC">
        <h2>edges</h2>
        <p class="data">{{ edges }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.dataC {
  width: 50%;
  color: #fff;
}
.dataC h2 {
  margin: 0;
}
.data {
  background-color: #fff;
  padding: 1%;
  overflow: auto;
  color: #333;
  text-align: left;
}
#index-page {
  width: 100vw;
  height: 100dvh;
}

.counter {
  border: 3px solid #d9d9d9;
  width: 80%;
  height: 50%;
  margin: auto;
}

.dnd-flow {
  flex-direction: column;
  display: flex;
  height: 100%;
}

.dnd-flow aside {
  color: #fff;
  font-weight: 700;
  border-right: 1px solid #eee;
  padding: 15px 10px;
  font-size: 12px;
  background: #10b981bf;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 10px #0000004d;
}

.dnd-flow aside .nodes > * {
  margin-bottom: 10px;
  cursor: grab;
  font-weight: 500;
  -webkit-box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 10px 2px #00000040;
}
/* #login-page {
  background-color: #fff3ec;
} */

/* RWD for medium screens and up */
/* @media (max-width: 991px) {
} */
</style>
