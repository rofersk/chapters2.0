import Vue from 'vue'
import App from './App.vue'
import Register from './components/Register.vue'
import HelloWorld from './components/HelloWorld.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import './index.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/register', component: Register },
  { path: '/', component: HelloWorld },
]

const router = new VueRouter({
  routes,
})

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app')
