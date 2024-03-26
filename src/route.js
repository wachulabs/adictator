import Vue from "vue";
import VueRouter from "vue-router";

import LandPage from "@/pages/LandPage.vue";
import Login from "@/pages/auth/Login.vue";
import Register from "@/pages/auth/Register.vue";
import RecoverAccount from "@/pages/auth/RecoverAccount.vue";
import Verify from "@/pages/auth/Verify.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: LandPage,
    meta: {
      authRequired: false,
    },
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: {
      authRequired: false,
    },
  },
  {
    name: "register",
    path: "/register",
    component: Register,
    meta: {
      authRequired: false,
    },
  },
  {
    name: "recover",
    path: "/recover",
    component: RecoverAccount,
    meta: {
      authRequired: false,
    },
  },
  {
    name: "verify",
    path: "/verify",
    component: Verify,
    meta: {
      authRequired: false,
    },
  },
  { path: "*", component: PageNotFound },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem("vuex"));
  const loggedIn = user ? user.auth.status.loggedIn : false;
  if (to.meta.authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});
export default router;
