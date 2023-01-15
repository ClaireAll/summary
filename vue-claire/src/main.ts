import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import VMdPreview from '../plugins/index';

import App from "./App.vue";
import Home from "./Home.vue";
import router from "./router";

import "./assets/main.less";

const app = createApp(Home);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(VMdPreview);

app.mount("#app");
