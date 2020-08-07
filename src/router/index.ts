import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Grid from '../views/Grid.vue';
import PlantForm from '../views/Plantform.vue';
import LandingPage from '../views/LandingPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/grid',
    name: 'Grid',
    component: Grid,
  },
  {
    path: '/plant',
    name: 'PlantForm',
    component: PlantForm,
  },
  {
    path: '/home',
    name: 'home',
    component: LandingPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
