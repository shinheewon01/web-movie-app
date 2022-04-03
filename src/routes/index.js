import { createRouter, createWebHashHistory} from  'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'


export default createRouter({
  //Hash 
  //https://google.com/#/search
  history:createWebHashHistory(),
  scrollBehavior(){
    return { top: 0}
  },
  // pages들을 구분해줌!
  routes:[
    {
      //https://google.com/ 메인페이지로 접근하겠다!
      path:'/',
      component: Home
    },
    {
      path:'/movie/:id',
      component: Movie
    },
    {
      path:'/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }

  ]
})