import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Home from '@/components/Home'
import LoanList from '@/components/LoanList'
import Users from '@/components/Users'
import AddLoan from '@/components/AddLoan'
import LoanEdit from '@/components/LoanEdit'
import LoanRemove from '@/components/LoanRemove'
import EditDetail from '@/components/EditDetail'
import GetToken from '@/components/GetToken'
import GetData from '@/components/GetData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: '/home',
          component: Home,
          meta: [],
        },
        {
          path: '/loanlist',
          component: LoanList,
          meta: [],
        },
        {
          path: '/users',
          component: Users,
          meta: [],
        },
        {
          path: '/addloan',
          component: AddLoan,
          meta: []
        },
        {
          path: '/loanremove',
          component: LoanRemove,
          meta: []
        },
        {
          path: '/loanedit',
          component: LoanEdit,
          meta: []
        },
        {
          path: '/edit',
          component: EditDetail,
          meta: []
        },
        {
          path: '/getToken',
          component: GetToken,
          meta: []
        },
        {
          path: '/getData',
          component: GetData,
          meta: []
        }
      ]
    }
  ]
})
