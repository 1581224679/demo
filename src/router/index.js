import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/message",
    name: "message",
    component: () => import("../components/message"),
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../components/my"),
  },
  {
    path: "/work",
    name: "work",
    component: () => import("../components/work"),
  },
];
