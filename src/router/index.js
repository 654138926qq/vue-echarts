import Vue from 'vue'
import Router from 'vue-router'
import formsWrapper from '@/components/formsWrapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Histogram',
      component: formsWrapper
    }
  ]
})
