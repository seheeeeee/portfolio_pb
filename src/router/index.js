import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProjectView from '../views/ProjectView.vue';
import ContactView from '../views/ContactView.vue';
import publishingView from '../views/subViews/publishingView.vue';
// import scriptView from '../views/subViews/scriptView.vue';
import fwView from '../views/subViews/fwView.vue';



Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/portfolio_pb',
      redirect: '/home',
    },
    // {
    //   path: '/',
    //   redirect: '/home',
    // },
    {
      // path: url 이름(주소)
      path: '/home',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: HomeView,
    },
    {
      path: '/about',
      component: AboutView,
    },
    {
      path: '/project',
      component: ProjectView,
    },
    {
      path: '/contact',
      component: ContactView,
    },
    {
      path: '/publishing',
      component: publishingView,
    },
    {
      path: '/instagram',
      beforeEnter() {location.href = 'https://seheeeeee.github.io/instagram/'}
    },
    {
      path: '/fw',
      component: fwView,
    },
    {
      path: '/scheduler',
      beforeEnter() {location.href = 'https://seheeeeee.github.io/scheduler/'}
    },
    {
      path: '/site-ansancity',
      beforeEnter() {location.href = 'https://seheeeeee.github.io/site-ansancity/'}
    },
    {
      path: '/site-kwater',
      beforeEnter() {location.href = 'https://seheeeeee.github.io/site-kwater/'}
    },
    {
      path: '/site-29cm',
      beforeEnter() {location.href = 'https://seheeeeee.github.io/site-29cm/'}
    },
    {
      path: '/site-LotteHotelShop',
      beforeEnter() {location.href = 'https://seheeeeee.github.io/site-LotteHotelShop/'}
    },
    {
      path: '/GuessTheWord',
      beforeEnter() {location.href = 'https://seheeeeee.github.io/GuessTheWord/'}
    },
  ],
});