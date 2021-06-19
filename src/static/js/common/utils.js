import {
    Notification
} from 'element-ui'
// 样式在全局已经引入
// import 'element-ui/lib/theme-chalk/index.css'

export default {
    handleSuccess: function (msg) {
        Notification({
            title: msg || '操作成功',
            type: 'success'
        });
    },
    handleWarning: function (msg) {
        Notification({
            title: msg || '操作失败',
            type: 'warning'
        });
    },
    handleError: function (msg) {
        Notification({
            title: msg || '出错了，请稍后重试',
            type: 'error'
        });
    },
}