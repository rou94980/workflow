<script setup>
import useDragAndDrop from "@/tools/useDnD";

const { onDragStart } = useDragAndDrop();
</script>

<template>
  <aside>
    <div class="sidebar">
      <div
        class="vue-flow__node-input"
        :draggable="true"
        @dragstart="onDragStart($event, 'input')"
      >
        輸入
      </div>

      <div
        class="vue-flow__node-default"
        :draggable="true"
        @dragstart="onDragStart($event, 'default')"
      >
        節點A
      </div>

      <div
        class="vue-flow__node-output"
        :draggable="true"
        @dragstart="onDragStart($event, 'output')"
      >
        節點B
      </div>
    </div>
  </aside>
</template>

<style scoped lang="css">
aside {
  color: #fff;
  font-weight: 700;
  padding: 15px 10px;
  font-size: 12px;
  background: #10b981bf;
  box-shadow: 0 5px 10px #0000004d;
  margin: 50px 50px 20px;
}
.sidebar {
  display: flex;
  justify-content: space-evenly;
  gap: 10%;
}

aside .nodes > * {
  margin-bottom: 10px;
  cursor: grab;
  font-weight: 500;
  -webkit-box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 10px 2px #00000040;
}
</style>
