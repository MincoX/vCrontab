module.exports = {
    user: {
        login: { path: '/api/user/login' },
        loginOut: { path: '/api/user/loginOut' },
        userInfo: { path: '/api/user/info' },
    },
    job: {
        list: { path: '/api/job/list' },
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
