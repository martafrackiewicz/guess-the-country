import { createRouter, createWebHistory } from 'vue-router';
import Flags from '../components/Flags.vue';
import Capitals from '../components/Capitals.vue';
import Home from '../components/Home.vue';

const routes = [
  { path: '/flags', name: 'Flags', component: Flags },
  { path: '/capitals', name: 'Capitals', component: Capitals },
  { path: '/', name: 'Home', component: Home },
];

const router = createRouter({
  history: createWebHistory(process.env.baseUrl),
  routes,
});

export default router;
