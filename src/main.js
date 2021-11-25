// Dependencies
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
// Style
import './index.css';

// Landing page
import LandingPage from './components/landing-page/LandingPage.vue';
// Admin Components
import Admin from './components/admin-page/Admin.vue';
import BookEntry from './components/admin-page/BookEntry.vue';
import BorrowedBooks from './components/admin-page/BorrowedBooks.vue';
import History from './components/admin-page/History.vue';
import Home from './components/admin-page/Home.vue';
import ListOfBooks from './components/admin-page/ListOfBooks.vue';
import ReservedBooks from './components/admin-page/ReservedBooks.vue';
import ListOfAdministrators from './components/admin-page/ListOfAdministrators.vue';
// Student Components
import User from './components/user-page/User.vue';
import UserBookComponent from './components/user-page/UserBookComponent.vue';
import UserBookComponentConfirmation from './components/user-page/UserBookComponentConfirmation.vue';
import UserHome from './components/user-page/UserHome.vue';
import UserProfile from './components/user-page/UserProfile.vue';
import UserReservedBooks from './components/user-page/UserReservedBooks.vue';
// Configs
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/chapters', 
    name: 'LandingPage',
    component: LandingPage,
},
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: '/book-entry',
        name: 'BookEntry',
        component: BookEntry,
        props: true,
      },
      {
        path: '/borrowed-books',
        name: 'BorrowedBooks',
        component: BorrowedBooks,
        props: true,
      },
      {
        path: '/history',
        name: 'History',
        component: History,
        props: true,
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
        props: true,
      },
      {
        path: '/list-of-books',
        name: 'ListOfBooks',
        component: ListOfBooks,
        props: true,
      },
      {
        path: '/reserved-books',
        name: 'ReservedBooks',
        component: ReservedBooks,
        props: true,
      },
      {
        path: '/list-of-administrators',
        name: 'ListOfAdministrators',
        component: ListOfAdministrators,
        props: true,
      },
    ],
  },
  { 
    path: '/user', 
    name: 'user',
    component: User,
    children: []
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
