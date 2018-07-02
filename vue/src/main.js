// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import Index from './components/Index.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import Success from './components/Success.vue'
import Ticket from './components/Ticket.vue'
import TicketInfo from './components/TicketInfo.vue'
import Pay from './components/Pay.vue'
import Assess from './components/Assess.vue'
import PaySuccess from './components/PaySuccess.vue'
import MyTicket from './components/MyTicket.vue'
import Address from './components/Address.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Index
},{
  path: '/signUp',
  component: SignUp
},{
  path: '/signIn',
  component: SignIn
},{
  path: '/success',
  component: Success
},{
  path: '/ticket',
  component: Ticket
},{
  path: '/ticketInfo',
  component: TicketInfo
},{
  path: '/pay',
  component: Pay
},{
  path: '/assess',
  component: Assess
},{
  path: '/paySuccess',
  component: PaySuccess
},{
  path: '/myTicket',
  component: MyTicket
},{
  path: '/address',
  component: Address
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
