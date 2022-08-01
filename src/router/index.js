import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../components/About.vue';
import Services from '../components/Services.vue';
import Contact from '../components/Contact.vue';
import Massage from '../views/Massage.vue';
import Shaping from '../views/Shaping.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: 'About',
    hash: '#rolam',
    component: About,
  },
  {
    path: '/',
    name: 'Services',
    hash: '#szolgaltatasok',
    component: Services,
  },
  {
    path: '/',
    name: 'Contact',
    hash: '#kapcsolat',
    component: Contact,
  },
  {
    path: '/masszazs',
    name: 'Massage',
    component: Massage,
  },
  {
    path: '/kezelesek',
    name: 'Shaping',
    component: Shaping,
  },
  {
    // catch all 404 - define at the very end
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
  // {
  //   path: '*',
  //   name: 'catchAll',
  //   component: Home,
  // },
];

const router = new VueRouter({
  mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth',
      });
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
