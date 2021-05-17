import Vue from 'vue'
import App from './App.vue'
import router from './router'
import{input,Button,Container,Form,
  FormItem, Header,Aside,Main} from 'element-ui'
//引入图标样式文件
import 'assets/font/iconfont.css';
//引入request
import {request} from 'network/request.js'
//添加到vue原型
Vue.prototype.req = request  

Vue.config.productionTip = false
Vue.use(input)
Vue.use(Button)
Vue.use(Container)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
