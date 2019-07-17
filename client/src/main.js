import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({ routes, mode: 'history' })

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    localStorage.getItem('jwt') == null
  ) {
    next({
      path: '/login',
      params: { nextUrl: to.fullPath },
    })
  } else {
    next()
  }
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
