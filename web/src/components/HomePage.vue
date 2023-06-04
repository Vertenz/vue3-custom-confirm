<script setup lang="ts">
import useConfirm from 'vue3-custom-confirm/index.ts';

const { confirm } = useConfirm();

const handleConfirmClick = () => {
  confirm({
    message: 'Вы уверены?',
    onDone: () => {
      console.log("Ok!");
    },
    onClose: () => {
      console.log("Closed!");
    }
  });
};
</script>

<template>
 <button @click="handleConfirmClick">
   confirm test
 </button>

  <button style="position: relative; z-index: 102" @click="handleConfirmClick">
    the confirm test button with a higher z-index.
  </button>
</template>

<style scoped>

</style>