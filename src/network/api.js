module.exports = {
  user: {
    login: { path: '/api/user/login' },
    logout: { path: '/api/user/logout' },
    userInfo: { path: '/api/user/info' },
  },
  job: {
    mysqlList: { path: '/api/job/mysql/list' },
    etcdList: { path: '/api/job/etcd/list' },
    add: { path: '/api/job/add' },
    delete: { path: '/api/job/delete' },
    update: { path: '/api/job/update' },
    kill: { path: '/api/job/kill' },
    log: { path: '/api/job/logs' },
  },
  worker: {
    list: { path: '/api/worker/list' },
  }
}
