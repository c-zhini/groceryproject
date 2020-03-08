import Vue from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.component('CounterBtn',Counter)

//Register Routes
const myRouter = new VueRouter({
  routes: Routes,
  mode:'history'
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')

