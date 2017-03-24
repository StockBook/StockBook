import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Cover from '@/components/Cover/Cover'
import Video from '@/components/Video/Video'

Vue.use(Router)

export default new Router({
  routes: [ {path: '/', name: 'Hello', component: Hello },
            {path: '/cover', name: 'cover', component: Cover },
            {path: '/videos', name: 'videos', component: Video }
          ]
})
