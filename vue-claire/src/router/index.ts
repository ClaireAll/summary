import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Paper from "../views/Paper.vue";
import Table from '../views/components/Table.vue';
import Skill from '../views/js/Skill.vue';
import CssSkill from '../views/css/Skill.vue';

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
      path: "/css",
      name: "css",
      children: [
        {
          path: '/cssSkill',
          name: 'cssSkill',
          component: CssSkill,
        },
      ],
    },
    {
      path: "/component",
      name: "component",
      children: [
        {
          path: "/table",
          name: "table",
          component: Table,
        },
      ],
    },
    {
      path: '/ts',
      name: 'ts',
      children: [
        {
          path: '/skill',
          name: 'skill',
          component: Skill,
        },
      ],
    },
  ],
});

export default router;
