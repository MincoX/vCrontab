var qs = require('qs');
import axios from 'axios';

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import router from "@/router";
import utils from '@/static/js/common/utils'
import Loading from '@/components/loading'

axios.defaults.timeout = 1000 * 60;
// axios.defaults.baseURL = 'http://47.98.56.172:10002';
// axios.defaults.baseURL = 'http://127.0.0.1:10002';

axios.interceptors.request.use(
  config => {
    NProgress.start()
    Loading.start()
    config.headers = {
      // 'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config;
  },
  error => {
    NProgress.done()
    Loading.done()
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    NProgress.done()
    Loading.done()
    if (response.status == 401) {
      router.push({
        path: "/login",
        query: { redirect: router.currentRoute.fullPath } // 登录成功后从定向到之前的页面
      })
    }
    return response;
  },
  error => {
    NProgress.done()
    Loading.done()
    return Promise.reject(error)
  }
);

export default {
  fetch: function (url, params = {}, options = {}) {
    let {
      successNotify = false, errorNotify = true
    } = options;

    /*
        响应成功且 http status 为 2xx  会进入 then 分支，否者进入 err 分支
        当 then 或者 err 分支有语句执行错误时候都会进入到 catch 分支
    */
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(response => {
        // http status 为 2xx
        if (response.data.code == 200) {
          // api 操作成功
          if (successNotify) utils.handleSuccess(response.data.msg);
        } else {
          // api 操作失败
          if (errorNotify) utils.handleWarning(response.data.msg);
        }
        // 返回 service 的数据
        resolve(response.data);
      }, err => {
        // 非 2xx 的状态码
        switch (err.response.status) {
          case 401:
            utils.handleError('登录状态失效，请重新登录')
            router.push("/login");
            break;
          default:
            utils.handleError('服务器异常，请联系管理员')
        }
        reject(err)
      }).catch(err => {
        // 捕获 then 或 err 分支中的语句错误
        utils.handleError('出错了,请稍后重试');
        reject(err)
      })
    })
  },

  post: function (url, data = {}, options = {}) {
    let {
      successNotify = true, errorNotify = true
    } = options;

    /*
        响应成功且 http status 为 2xx  会进入 then 分支，否者进入 err 分支
        当 then 或者 err 分支有语句执行错误时候都会进入到 catch 分支
    */
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data))
        .then(response => {
          // http status 为 2xx
          if (response.data.code == 200) {
            // api 业务操作成功
            if (successNotify) utils.handleSuccess(response.data.msg);
          } else {
            // api 业务操作失败
            if (errorNotify) utils.handleWarning(response.data.msg);
          }
          resolve(response.data);
        }, err => {
          // 非 2xx 的状态码
          switch (err.response.status) {
            case 401:
              utils.handleError('登录状态失效，请重新登录')
              router.push("/login");
              break;
            default:
              utils.handleError('服务器异常，请联系管理员')
          }
          reject(err)
        }).catch(err => {
          // 捕获 then 或 err 分支中的语句错误
          utils.handleError('出错了,请稍后重试');
          reject(err)
        })
    })
  },
}
