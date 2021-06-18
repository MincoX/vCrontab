<template>
    <div class="card card-primary card-outline direct-chat direct-chat-primary">
        <div class="card-header d-flex p-0">
            <ul class="nav nav-pills p-2 float-left">
                <li class="nav-item" @click="toggleJobs('1')">
                    <a class="nav-link active" href="#tab_1" data-toggle="tab">
                        待调度
                    </a>
                </li>
                <li class="nav-item" @click="toggleJobs('0')">
                    <a class="nav-link" href="#tab_2" data-toggle="tab">
                        已完成
                    </a>
                </li>
            </ul>
            <ul class="nav nav-pills ml-auto p-2 float-right">
                <li class="nav-item dropdown show">
                    <a
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        aria-expanded="true"
                    >
                        添加任务
                        <span class="caret"></span>
                    </a>
                    <div
                        class="dropdown-menu"
                        id="addJob-dropdown-menu"
                        x-placement="bottom-start"
                    >
                        <a
                            class="dropdown-item"
                            tabindex="-1"
                            href="#"
                            @click="
                                $emit('sendModaloption', {
                                    title: '定时任务',
                                    apiObj: 'post.job.add',
                                    form: {},
                                    model: {
                                        name: '',
                                        command: '',
                                        cronExpr: '*/30 * * * * * *',
                                        typ: 0,
                                    },
                                    fieldService: 'JobAddCronFields',
                                })
                            "
                            >定时任务</a
                        >
                        <a
                            class="dropdown-item"
                            tabindex="-1"
                            href="#"
                            @click="
                                $emit('sendModaloption', {
                                    title: '单次任务',
                                    apiObj: 'post.job.add',
                                    model: {
                                        name: '',
                                        command: '',
                                        typ: 1,
                                    },
                                    fieldService: 'JobAddOnceFields',
                                })
                            "
                            >单次任务</a
                        >
                    </div>
                </li>
            </ul>
        </div>

        <div class="card-body p-0">
            <table class="table table-striped">
                <thead>
                    <tr class="text-center">
                        <th>任务名</th>
                        <th>命令行</th>
                        <th>定时表达式</th>
                        <th>任务类型</th>
                        <th>已执行次数</th>
                        <th>执行状态</th>
                        <th>下次执行时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="text-center"
                        v-for="item in jobPageDatas"
                        :key="item.id"
                    >
                        <td>{{ item.name }}</td>
                        <td>
                            {{ item.command }}
                        </td>
                        <td>
                            <span v-if="item.cron_expr != ''">{{
                                item.cron_expr
                            }}</span>
                            <span v-else>无</span>
                        </td>
                        <td>
                            {{ jobType[item.typ] }}
                        </td>
                        <td>{{ item.num }}</td>
                        <td>
                            <span :class="[statusType[item.status].cls]">
                                {{ statusType[item.status].status }}</span
                            >
                        </td>
                        <td>
                            <span v-if="item.next_time">{{
                                dateFormat(item.next_time)
                            }}</span>
                            <span v-else>无</span>
                        </td>
                        <td>
                            <button
                                type="submit"
                                class="btn btn-warning"
                                @click="killJob(item.name)"
                            >
                                停止
                            </button>
                            &nbsp;&nbsp;
                            <button
                                type="submit"
                                class="btn btn-danger"
                                @click="deleteJob(item.name)"
                            >
                                删除
                            </button>
                            &nbsp;&nbsp;
                            <button
                                type="button"
                                class="btn btn-success"
                                data-toggle="modal"
                                data-target="#modal-xl"
                                @click="getLogs(item.name)"
                            >
                                日志
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- jobs -->
        <Pagination
            :page-index="jobCurrentPage"
            :total="jobTotalCount"
            :page-size="jobPageSize"
            @change="jobPageChange"
        />

        <div
            class="modal fade"
            id="modal-xl"
            style="display: none"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="card-header">
                        <h4 class="card-title log-title">{{ jobName }} 日志</h4>

                        <!-- logs -->
                        <Pagination
                            class="float-right"
                            :page-index="logCurrentPage"
                            :total="logTotalCount"
                            :page-size="logPageSize"
                            @change="logPageChange"
                        />
                    </div>
                    <table class="table table-striped">
                        <thead>
                            <tr class="text-center">
                                <th>任务名</th>
                                <th>脚本命令</th>
                                <th>计划调度时间</th>
                                <th>实际调度时间</th>
                                <th>开始执行时间</th>
                                <th>执行结束时间</th>
                                <th>执行状态</th>
                            </tr>
                        </thead>
                        <tbody class="log-table">
                            <tr
                                class="direct-chat-text text-center"
                                style="margin: auto"
                                v-if="!logPageDatas"
                            >
                                暂时没有日志输出
                            </tr>
                            <tr
                                v-for="item in logPageDatas"
                                :key="item.id"
                                class="text-center"
                            >
                                <td>{{ item.job_name }}</td>
                                <td>{{ item.command }}</td>
                                <td>{{ item.plan_time }}</td>
                                <td>{{ item.schedule_time }}</td>
                                <td>{{ item.start_time }}</td>
                                <td>{{ item.end_time }}</td>
                                <td class="tooltips">
                                    <p
                                        class="badge bg-danger hb-gold"
                                        v-if="item.result == '0'"
                                    >
                                        执行错误
                                    </p>
                                    <p class="badge bg-success hb-gold" v-else>
                                        执行成功
                                    </p>
                                    <span
                                        class="direct-chat-text"
                                        v-if="item.err != ''"
                                        >{{ "错误输出：" + item.err }}</span
                                    >
                                    <span class="direct-chat-text" v-else>{{
                                        "结果输出：" + item.output
                                    }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from "@/network/api";
import Constants from "@/static/js/common/constants";
export default {
    inject: ["reload"],
    data() {
        return {
            reqTyp: "1",
            jobName: "",
            jobType: {},
            statusType: {},

            // 分页属性
            jobPageDatas: null,
            jobTotalCount: 0,
            jobPageSize: 10,
            jobCurrentPage: 1,

            logPageDatas: null,
            logTotalCount: 0,
            logPageSize: 12,
            logCurrentPage: 1,
        };
    },
    mounted() {
        this.getJobs();
        this.jobType = Constants.JobType();
        this.statusType = Constants.StatusType();
        this.timer = setInterval(this.getJobs, 1 * 60 * 1000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    methods: {
        getJobs() {
            this.$req
                .fetch(
                    API.job.mysqlList.path,
                    {
                        reqTyp: this.reqTyp,
                        pageSize: this.jobPageSize,
                        currentPage: this.jobCurrentPage,
                    },
                    {}
                )
                .then((resp) => {
                    if (resp.code == 200) {
                        this.jobPageDatas = resp.data.jobs;
                        this.jobTotalCount = resp.data.totalCount;
                        console.info("etcd mysqlList >>> ", resp.data.jobs);
                    }
                });
            this.$req.fetch(API.job.etcdList.path, {}, {}).then((resp) => {
                if (resp.code == 200) {
                    console.info("etcd jibList >>> ", resp.data.jobs);
                }
            });
        },
        getLogs(name) {
            this.jobName = name;
            this.$req
                .post(API.job.log.path, {
                    jobName: name,
                    pageSize: this.logPageSize,
                    currentPage: this.logCurrentPage,
                })
                .then((resp) => {
                    if (resp.code == 200) {
                        this.logPageDatas = resp.data.logs;
                        this.logTotalCount = resp.data.totalCount;
                    }
                });
        },
        killJob(name) {
            this.$req.post(API.job.kill.path, { name }).then((resp) => {
                if (resp.code == 200) {
                    this.jobs = resp.data.jobs;
                    this.reload();
                }
            });
        },
        deleteJob(name) {
            this.$req.post(API.job.delete.path, { name }).then((resp) => {
                if (resp.code == 200) {
                    this.jobs = resp.data.jobs;
                    this.reload();
                }
            });
        },
        jobPageChange(page) {
            this.jobCurrentPage = page;
            this.getJobs();
        },
        logPageChange(page) {
            this.logCurrentPage = page;
            this.getLogs(this.jobName);
        },
        toggleJobs(reqTyp) {
            this.reqTyp = reqTyp;
            this.getJobs();
        },
    },
};
</script>

<style lang="scss" scoped>
#addJob-dropdown-menu {
    position: absolute;
    will-change: transform;
    top: 0px;
    left: -20px;
    transform: translate3d(-10px, 0px, 0px);
}
.card-header {
    padding: 0px 10px;
}
.log-title,
table tr {
    line-height: 50px;
}
table td {
    padding: 2px 12px;
}
</style>
