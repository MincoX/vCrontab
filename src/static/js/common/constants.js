var statusType = {
  0: { status: "待调度", cls: "badge bg-primary" },  // 任务在 etcd 中，还没有通过 watch 放入计划表
  1: { status: "待执行", cls: "badge bg-primary" }, // 任务已同步至计划表
  2: { status: "执行中", cls: "badge bg-warning" },  // 任务在执行队列中
  3: { status: "执行异常", cls: "badge bg-danger" },  // 任务在执行队列中
  4: { status: "已完成", cls: "badge bg-success" },  // 任务成功从执行队列中删除（只对单次任务有效，定时任务执行完成后状态成待执行）
  5: { status: "已删除", cls: "badge bg-danger" },  // 任务已从 etcd 中删除
}

var jobType = {
  0: "定时任务",
  1: "单次任务",
}

export default {
  StatusType: function () {
    return statusType
  },
  JobType: function () {
    return jobType
  }
}
