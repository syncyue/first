import axios from 'axios'
export function request (config){
    const instance = axios.create({
        baseURL:'',
        timeout:3000
    })
    instance.interceptors.request.use(config=>{
        console.log(res);
        console.log('这是拦截器')
    })
    return instance(config);

}