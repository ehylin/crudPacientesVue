import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      login: false,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( "../views/About.vue"),
    meta: {
      login: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      login: false,
    },
  },
  {
    path: "/editarPaciente/:id",
    name: "EditarPaciente",
    component: () => import("../views/EditarPaciente.vue"),
    meta: {
      login: false,
    },
  },
  {
    path: "/agregarPaciente",
    name: "AgregarPaciente",
    component: () => import("../views/AgregarPaciente.vue"),
    meta: {
      login: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    if (Store.state.currentUser) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
