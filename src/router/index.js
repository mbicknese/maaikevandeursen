import Vue from 'vue'
import Router from 'vue-router'
import ComingSoon from '@/components/ComingSoon'
// import BlogPost from '@/components/BlogPost'
import NotFoundComponent from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: ComingSoon
    },
    // {
    //   path: '/blog/:id',
    //   name: 'BlogPost',
    //   component: BlogPost,
    //   props: true
    // },
    { path: '*', component: NotFoundComponent }
  ]
})
