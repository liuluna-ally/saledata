import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由懒加载
const Login = ()=> import ('views/login/Login.vue')
const Home =()=>import('views/home/Home.vue')
Vue.use(VueRouter)

const routes = [
    // 重定向
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/home',
        component:Home
    }
]
const router = new VueRouter({
    routes,
})

export default router