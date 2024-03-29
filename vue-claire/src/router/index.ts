import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Paper from "../views/Paper.vue";
import Table from '../views/components/Table.vue';
import Skill from '../views/js/Skill.vue';
import CssSkill from '../views/css/Skill.vue';
import CssTest from '../views/css/CssTest.vue';
import Form from '../views/components/Form.vue';
import ElementAttr from '../views/js/ElementAttr.vue';
import ScrollAnimation from '../views/css/ScrollAnimation.vue';

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
        {
          path: '/cssTest',
          name: 'cssTest',
          component: CssTest,
        },
        {
          path: '/scrollAnimation',
          name: 'ScrollAnimation',
          component: ScrollAnimation,
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
        {
          path: "/form",
          name: "form",
          component: Form,
        },
      ],
    },
    {
      path: '/js',
      name: 'js',
      children: [
        {
          path: '/skill',
          name: 'skill',
          component: Skill,
        },
        {
          path: '/elementAttr',
          name: 'ElementAttr',
          component: ElementAttr,
        },
      ],
    },
  ],
});

export default router;
