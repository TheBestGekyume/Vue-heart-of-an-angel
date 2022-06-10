import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PoemaView from '../views/PoemaFormView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/write',
    name: 'poema',
    component: PoemaView
  }
  
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
