<template>
    <div class="card card-primary card-outline">
        <div class="card-header">
            <h3 class="card-title">集群列表</h3>

            <div class="card-tools">
                <div class="input-group input-group-sm">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search Mail"
                    />
                    <div class="input-group-append">
                        <div class="btn btn-primary">
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.card-tools -->
        </div>
        <div class="card-body p-0">
            <div class="table-responsive mailbox-messages">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr class="text-center">
                            <th>IP</th>
                            <th>工作时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                            class="text-center"
                            v-for="item in workerPageDatas"
                            :key="item.id"
                        >
                            <td>
                                {{ item.ip }}
                            </td>
                            <td>
                                {{ item.activeTime }}
                            </td>
                            <td class="mailbox-name"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="card-footer p-0">
            <div class="mailbox-controls">
                <div class="float-right">
                    <Pagination
                        :page-index="workerCurrentPage"
                        :total="workerTotalCount"
                        :page-size="workerPageSize"
                        @change="workerPageChange"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from "@/network/api";
export default {
    data() {
        return {
            workerPageDatas: null,
            workerTotalCount: 0,
            workerPageSize: 10,
            workerCurrentPage: 1,
        };
    },
    mounted() {
        this.getWorkers();
    },
    methods: {
        getWorkers() {
            this.$req.fetch(API.worker.list.path, {}, {}).then((resp) => {
                if (resp.code == 200) {
                    this.workerPageDatas = resp.data.workers;
                    this.workerTotalCount = resp.data.totalCount;
                }
            });
        },
        workerPageChange(page) {
            this.workerCurrentPage = page;
            this.getWorkers();
        },
    },
};
</script>