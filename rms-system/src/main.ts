import { createApp, watch } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios";
import axios from "axios";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(router);

app.use(VueAxios, axios);

app.use(pinia);
app.mount("#app");
