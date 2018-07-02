import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
