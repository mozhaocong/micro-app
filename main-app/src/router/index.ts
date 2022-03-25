import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyPageView from "../views/Mypage.vue";
import MyPageViewB from "../views/MypageB.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: "/my-page1/:page*",
    name: "my-page1",
    component: MyPageView,
  },
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: "/my-page2/:page*",
    name: "my-page2",
    component: MyPageViewB,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
