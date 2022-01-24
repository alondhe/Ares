import Vue from "vue";
import App from "./App.vue";
import store from "./data/store";
import router from "./router";
import vuetify from "@/plugins/vuetify";

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
