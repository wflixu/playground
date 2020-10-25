<template>
  <h2>生命周期</h2>
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {
      console.log('component is mounted!');
    });
  },
};
</script>
