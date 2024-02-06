import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import "@/assets/css/bootstrap.min.css";

// index.html의 id인 app에 마운트가 되도록 하는 코드
// 초기 코드 : createApp(App).mount('#app')
const app = createApp(App);
// vue 애플리케이션에서 전역적으로 기능 사용할 경우에 아래와 같이 use 문법 사용
app.use(router);
app.mount("#app");
