// Dependencies
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'

// Style
import './index.css'


// Components
import Admin from './components/admin-page/Admin.vue'
import User from './components/user-page/User.vue'
import LandingPage from './components/landing-page/LandingPage.vue'

// Configs
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: LandingPage },
  { path: '/admin', component: Admin},
  { path: '/user', component: User },
]

const router = new VueRouter({
  routes,
})

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app')
