import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Cover from '@/components/Cover/Cover'

Vue.use(Router)

export default new Router({
  routes: [{path: '/', name: 'Hello', component: Hello},
           {path: '/cover', name: 'Cover', component: Cover},
          ]
})
