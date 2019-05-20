import Vue from 'vue'
import Router from 'vue-router'
import testCode from '@/components/testCode'
import agent from '@/components/agent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testCode',
      component: testCode
    },
    {
      path:'/agent',
      name:'agent',
      component: agent
    }
  ]
})
