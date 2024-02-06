import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "@/components/HomeComponent.vue";
import MemberList from "@/views/MemberList.vue";
import LoginComponent from "@/views/LoginComponent.vue";

const routes = [
  {
    // route 사용 1) url로 부르는 경우 2) 이름으로 부르는 경우
    // url 경로 지정
    path: "/",
    // 이 라우터의 이름
    name: "HOME",
    // 화면 연결
    component: HomeComponent,
  },
  {
    path: "/members", // Mapping url
    name: "MemberList",
    component: MemberList, // rendering page name
  },
  {
    path: "/login",
    name: "Login",
    component: LoginComponent,
  },
];

const router = createRouter({
  // vue router는 내부적으로 두 가지 방식의 히스토리 관리를 제공
  // 1) createWebHistory, createHashHistory
  history: createWebHistory(),
  routes,
});

export default router;
