import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const dataRoutes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    nameAs: 'Beranda',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
    ],
  },
  { path: '/home', component: Home, name: 'products', nameAs: 'Produk' },
  { path: '/home', component: Home, name: 'cart', nameAs: 'Keranjang' },
  { path: '/home', component: Home, name: 'products', nameAs: 'Profil' },
];

const router = createRouter({
  history: createWebHistory(),
  routes: dataRoutes,
});

export { dataRoutes, router };
