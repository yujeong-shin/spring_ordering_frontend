import { createRouter, createWebHistory } from "vue-router";
import ItemList from "@/views/ItemList.vue";
import LoginComponent from "@/views/LoginComponent.vue";
import BasicComponent from "@/components/BasicComponent.vue";
// export default인 경우에는 {} 필요없고, 여러개 요소가 있는 경우에는 {} 필요
import { memberRoutes } from "./memberRouter.js";
import { orderRoutes } from "./orderRouter.js";
import { itemRoutes } from "./itemRouter.js";

const routes = [
  {
    // route 사용 1) url로 부르는 경우 2) 이름으로 부르는 경우
    // url 경로 지정
    path: "/",
    // 이 라우터의 이름
    name: "HOME",
    // 화면 연결
    component: ItemList,
  },
  {
    path: "/basic",
    name: "BasicComponent",
    component: BasicComponent,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginComponent,
  },
  // ...은 스프레드 연산자로 불리고, 주로 배열 요소를 다른 배열 요소에 합할 때 사용
  ...memberRoutes,
  ...orderRoutes,
  ...itemRoutes,
];

const router = createRouter({
  // vue router는 내부적으로 두 가지 방식의 히스토리 관리를 제공
  // 1) createWebHistory, createHashHistory
  history: createWebHistory(),
  routes,
});

export default router;
