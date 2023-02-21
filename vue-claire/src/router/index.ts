import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Paper from "../views/Paper.vue";
import Table from "../views/Table.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/paper",
      name: "paper",
      component: Paper,
    },
    {
      path: "/table",
      name: "table",
      component: Table,
    },
    // {
    //   path: "/css",
    //   name: "css",
    //   component: CssView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
