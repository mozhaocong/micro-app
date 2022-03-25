<template>
  <!--  <div>主应用{{ microData }}</div>-->
  <micro-app
    name="app2"
    url="http://localhost:8003/"
    baseroute="/my-page2"
    keep-alive
  ></micro-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "microB",
  components: {},
  setup() {
    const microData = ref(1);
    setTimeout(() => {
      microData.value = 100;
    }, 1000);
    return { microData };
  },
});
</script>
