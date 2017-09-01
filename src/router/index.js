import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import ComingSoon from '@/components/ComingSoon'
import BlogPost from '@/components/BlogPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: ComingSoon
    },
    {
      path: '/blog/:id',
      name: 'BlogPost',
      component: BlogPost,
      props: true
    }
  ]
})
