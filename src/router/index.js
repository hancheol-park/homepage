import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Introduce from '../views/Intro/Introduce'
import Company from '../views/Intro/Company'
import Patent from '../views/Intro/Patent'
import Directioins from '../views/Intro/Directions'
import Business from '../views/Business/Business'
import AIcounsel from '../views/Business/AIcounsel'
import CrossPlatForm from '../views/Business/CrossPlatForm'
import GraphDB from '../views/Business/GraphDB'
import ChatBot from '../views/Business/ChatBot'
import MachineLearning from '../views/Business/MachineLearning'
import BoardList from "../views/Promotion/BoardList"
import BoardView from "../views/Promotion/BoardView"
import BoardWriter from "../views/Promotion/BoardWriter"
import BoardModify from "../views/Promotion/BoardModify"
import Login from '../views/Login'
import NotFound from '../views/NotFound'
import store from '../store'


Vue.use(VueRouter)

const requireAuth = () => (from, to, next) => {
  !store.state.accessToken
    ? next(`/login?returnPath=${encodeURIComponent(from.path)}`)
    : next()
}

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/introduce/:id',
    name: 'Introduce',
    component: Introduce,
    props: true,
    children: [
      {
        path: "company",
        component: Company
      },
      {
        path: "patent",
        component: Patent
      },
      {
        path: "directions",
        component: Directioins
      }
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/business/:id',
    name: 'Business',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Business,
    props: true,
    children: [
      {
        path: "crossplatform",
        component: CrossPlatForm
      },
      {
        path: "graphDB",
        component: GraphDB
      },
      {
        path: "chatbot",
        component: ChatBot
      },
      {
        path: "machinelearning",
        component: MachineLearning
      },
      {
        path: "AIcounsel",
        component: AIcounsel
      }
    ]
  },
  {
    path: '/boardlist',
    name: 'BoardList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BoardList
  },
  {
    path:'/boardlist/view',
    name: 'BoardView',
    component: BoardView
  },
  {
    path: '/boardlist/writer',
    name: 'BoardWriter',
    component: BoardWriter,
    beforeEnter: requireAuth()
  },
  {
    path: '/boardlist/modify',
    name: 'BoardModify',
    component: BoardModify,
    beforeEnter: requireAuth()
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
