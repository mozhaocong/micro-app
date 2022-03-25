<template>
  <!--  <div>主应用{{ microData }}</div>-->
  <micro-app
    name="app1"
    url="http://localhost:8002/"
    baseroute="/my-page1"
    keep-alive
  ></micro-app>
  <!--  <iframe src="http://localhost:8002/about"></iframe>-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
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
