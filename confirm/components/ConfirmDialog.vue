<template>
  <div class="wrapper">
    <div class="confirm-dialog">
      <div class="confirm-message">{{ options.message }}</div>
      <div class="confirm-buttons">
        <button @click="handleConfirm">Ok</button>
        <button @click="handleClose">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { defineProps } from 'vue';

const props = defineProps({
  options: Object,
  onDone: Function,
  onClose: Function,
});

const handleConfirm = () => {
  props.onDone();
};

const handleClose = () => {
  props.onClose();
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 101;
  background-color: rgba(1, 1, 1, 0.3);
}

.confirm-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.confirm-message {
  margin-bottom: 10px;
}

.confirm-buttons {
  display: flex;
  justify-content: flex-end;
}

.confirm-buttons button {
  margin-left: 10px;
}
</style>
