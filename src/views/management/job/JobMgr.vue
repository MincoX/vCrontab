<template>
    <div class="card card-primary card-outline direct-chat direct-chat-primary">
        <div class="card-header">
            <ul class="nav nav-pills ml-auto p-2 float-left">
                <li class="nav-item dropdown show">
                    <a
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        aria-expanded="true"
                    >
                        添加任务 <span class="caret"></span>
                    </a>
                    <div
                        class="dropdown-menu"
                        style="
                            position: absolute;
                            will-change: transform;
                            top: 0px;
                            left: 0px;
                            transform: translate3d(-5px, 40px, 0px);
                        "
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
                                        cronExpr: '',
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
                                    },
                                    fieldService: 'JobAddOneceFields',
                                })
                            "
                            >单次任务</a
                        >
                    </div>
                </li>
            </ul>
            <ul class="pagination pagination-mm float-right">
                <li class="page-item">
                    <a class="page-link" href="#">«</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">»</a>
                </li>
            </ul>
        </div>
        <div class="card-body p-0">
            <table class="table table-striped">
                <thead>
                    <tr class="text-center">
                        <th>任务名</th>
                        <th>shell</th>
                        <th>cron表达式</th>
                        <th>调度时间</th>
                        <th>执行次数</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center" v-for="item in jobs" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>
                            <span class="label label-success">{{
                                item.command
                            }}</span>
                        </td>
                        <td>{{ item.cronExpr }}</td>
                        <th>0</th>
                        <th>0</th>
                        <th>
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
                                type="submit"
                                class="btn btn-success"
                                @click="showLogs(item.name)"
                            >
                                日志
                            </button>
                        </th>
                    </tr>
                </tbody>
            </table>
            <data-modal
                ref="modal"
                data-toggle="modal"
                data-target="#modal-xl"
                :title="title"
                :columns="[
                    '任务名',
                    '脚本命令',
                    '计划调度时间',
                    '实际调度时间',
                    '开始执行时间',
                    '结束执行时间',
                    '脚本输出',
                    '错误输出',
                ]"
                :datas="logs"
            >
            </data-modal>
        </div>
    </div>
</template>

<script>
import API from "@/network/api";
import DataModal from "@/components/modal/DataModal";
export default {
    inject: ["reload"],
    data() {
        return {
            jobs: null,
            title: "",
            logs: [],
        };
    },
    components: {
        DataModal,
    },
    mounted() {
        this.getJobs();
    },
    methods: {
        getJobs() {
            this.$req.fetch(API.job.list.path, {}, {}).then((resp) => {
                if (resp.code == 200) {
                    this.jobs = resp.data.jobs;
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
        showLogs(name) {
            this.title = name + " 日志输出";
            this.$req.post(API.job.log.path, { name }).then((resp) => {
                if (resp.code == 200) {
                    this.logs = resp.data.logs;
                }
            });
            this.$refs.modal.$el.click();
        },
    },
};
</script>


