import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./public-path";
import { Router } from "vue-router";

// 与基座进行数据交互
function handleMicroData(router: Router) {
  // 是否是微前端环境
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.addEventListener("appstate-change", function (e: any) {
      if (e.detail.appState === "afterhidden") {
        // console.log("已卸载");
      } else if (e.detail.appState === "beforeshow") {
        // console.log("即将重新渲染");
      } else if (e.detail.appState === "aftershow") {
        // console.log("已经重新渲染");
        const pathname = location.pathname.replace("/my-page2", "") || "/";
        const fullPath = createVue.$route.fullPath;
        if (pathname !== fullPath) {
          router.replace(pathname);
        }
      }
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.microApp.addDataListener((data: any) => {
      const path = data.router.replace("/my-page2", "");
      router.push(path || "/");
    }, true);
  }
}

window.addEventListener("unmount", function () {
  // 执行卸载相关操作
});
const createVue = createApp(App).use(store).use(router).mount("#app");
console.log("子应用更新");
handleMicroData(router);
