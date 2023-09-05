import Vue from "vue";
import App from "./App.vue";
// 引入element-ui
import "./vendor/element-ui";
import "element-ui/lib/theme-chalk/index.css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
