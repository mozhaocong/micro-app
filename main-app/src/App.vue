<template>
  <div
    class="main-top"
    style="
      display: flex;
      justify-content: space-around;
      width: 80%;
      margin: 30px auto;
    "
  >
    <div @click="() => goRouter('/')">主应用Home</div>
    <div @click="() => goRouter('/about')">主应用About</div>
    <div @click="() => goRouter('/my-page1', 'my-page1')">子应用1Home</div>
    <div @click="() => goRouter('/my-page1/about', 'my-page1')">
      子应用1About
    </div>
    <div @click="() => goRouter('/my-page2/', 'my-page2')">子应用2Home</div>
    <div @click="() => goRouter('/my-page2/about', 'my-page2')">
      子应用2About
    </div>
  </div>
  <!--  <router-link to="/">主应用Home</router-link>| |-->
  <!--  <router-link to="/about">主应用About</router-link>|-->
  <!--  <router-link to="/my-page">子应用Home</router-link>|-->
  <!--  <router-link to="/my-page/about">子应用About</router-link>-->
  <div style="height: 100px; width: 100px"></div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import microApp from "@micro-zoe/micro-app";
//使用动态include解析
//app.vue文件
export default {
  name: "App",
  data() {
    return {
      includeList: [],
      previousRouterList: "",
    };
  },
  methods: {
    goRouter(type: any, microType = "") {
      const setDataType: any = {
        "my-page1": "app1",
        "my-page2": "app2",
      };
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that: any = this;
      const previousRouterList = that.previousRouterList;
      that.previousRouterList = type;
      if (previousRouterList && microType) {
        if (
          previousRouterList.includes(microType) &&
          type.includes(microType)
        ) {
          microApp.setData(setDataType[microType], { router: type });
          return;
        }
      }
      that.$router.push({ path: type });
    },
  },
  watch: {},
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-top {
  > div {
    cursor: pointer;
  }
}
</style>
