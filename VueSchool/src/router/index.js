import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index'
import usermsg from '@/page/usermsg'
import school from '@/page/school'
import active from '@/page/active'
import load from '@/page/load'
import reg from '@/page/reg'
import myActive from '@/page/myActive'
import joinActive from '@/page/joinActive'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/usermsg',
      name: 'usermsg',
      component: usermsg
    },
    {
      path: '/school',
      name: 'school',
      component: school
    },
    {
      path: '/active',
      name: 'active',
      component: active
    },
    {
      path: '/load',
      name: 'load',
      component: load
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/myActive',
      name: 'myActive',
      component: myActive
    },
    {
      path: '/joinActive',
      name: 'joinActive',
      component: joinActive
    }
  ]
})
