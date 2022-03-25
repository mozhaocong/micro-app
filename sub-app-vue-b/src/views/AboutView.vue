<template>
  <div class="about">
    <div>子应用2</div>
    <div>关于页</div>
    <div>{{ microData }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const microData = ref(2);
    setTimeout(() => {
      microData.value = 100;
    }, 1000);
    return { microData };
  },
});
</script>
