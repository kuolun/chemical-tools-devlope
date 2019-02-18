import Vue from "vue";
import Router from "vue-router";
import Question1 from "./components/Question1.vue";
import Question2 from "./components/Question2.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Question1
    },
    {
      path: "/Q2",
      name: "Q2",
      component: Question2
    }
  ]
});