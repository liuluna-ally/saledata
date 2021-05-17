import axios from 'axios'

export function request(config){
    //封装axios
    const instance = axios.create({
        baseURL:'http://127.0.0.1:8084',
        timeout:5000
    })
    // axios的拦截器
    instance.interceptors.request.use(config=>{
        return config
    },err=>{

    })
    // 发送网络请求
    return instance(config)
 }