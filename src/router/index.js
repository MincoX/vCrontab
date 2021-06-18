import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('@/views/login/Login')
const Home = () => import('@/views/Home')
const Dashboard1 = () => import('@/views/dashboard/Dashboard1')
const Index1 = () => import('@/views/management/index/Index1')
const Index2 = () => import('@/views/management/index/Index2')
const Index3 = () => import('@/views/management/index/Index3')
const JobMgr = () => import('@/views/management/job/JobMgr')
const WorkerMgr = () => import('@/views/management/job/WorkerMgr')
const UserMgr = () => import('@/views/management/user/UserMgr')
const PermitionMgr = () => import('@/views/management/user/PermitionMgr')
const VFormly = () => import('@/views/management/test/VFormly')

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/dashboard1',
    component: Dashboard1,
  },
  {
    path: '/index',
    component: Home,
    children: [
      {
        //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了
        path: 'index1',
        name: 'index1',
        component: Index1
      },
      {
        path: 'index2',
        name: 'index2',
        component: Index2
      },
      {
        path: 'index3',
        name: 'index3',
        component: Index3
      },
    ]
  },
  {
    path: '/job',
    component: Home,
    children: [
      {
        path: 'jobmgr',
        name: 'jobmgr',
        component: JobMgr
      },
      {
        path: 'workermgr',
        name: 'workermgr',
        component: WorkerMgr
      },
    ]
  },
  {
    path: '/user',
    component: Home,
    children: [
      {
        path: 'usermgr',
        name: 'usermgr',
        component: UserMgr
      },
      {
        path: 'permitionmgr',
        name: 'permitionmgr',
        component: PermitionMgr
      },
    ]
  },
  {
    path: '/test',
    component: Home,
    children: [
      {
        path: 'vformly',
        name: 'vformly',
        component: VFormly
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫
import Loading from '@/components/loading'
import NProgress from 'nprogress'

router.beforeEach((to, from, next) => {
  if (to.path != '/login' && localStorage.getItem('userInfo') == null) {
    next({ path: '/login' })
  }
  next()
})

router.afterEach(() => {
  // 避免接口一直未响应，跳转路由后还在 loading 的状况出现
  NProgress.done()
  Loading.done()
})

export default router
