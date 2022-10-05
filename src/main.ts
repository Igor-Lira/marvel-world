import { createApp, h } from "vue";
import router from "./router";
import App from "./App.vue";
import stored from "../stored/index";
import { createMetaManager } from "vue-meta";

const app = createApp({
  render: () => h(App),
});
app.use(router);
app.use(createMetaManager());
app.use(stored);
app.mount("#app");
