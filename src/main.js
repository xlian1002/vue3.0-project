/*
 * @Author: your name
 * @Date: 2021-04-07 16:35:29
 * @LastEditTime: 2021-04-07 17:09:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-test\src\main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
createApp(App).use(store).use(router).mount("#app");
