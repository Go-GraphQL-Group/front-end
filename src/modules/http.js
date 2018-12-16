'use strict'
import axios from 'axios'
import store from '../store/index'

// axios 配置
axios.defaults.timeout = 5000
// 用来处理刷新token后重新请求的自定义变量
axios.defaults.isRetryRequest = false

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 获取储存在本地的token值
    let authToken = store.state.main.token
    // 这边可根据自己的需求设置headers，我司采用basic基本认证
    if (authToken !== '') {
      config.headers.Authorization = `SW-TOKEN ` + authToken
      config.headers.post['Content-Type'] = 'application/json'
      config.headers.post['SW-TOKEN'] = authToken
      console.log(config.headers)
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios
