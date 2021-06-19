<template>
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header border-transparent">
                    <h3 class="card-title">集群列表</h3>
                    <div class="card-tools">
                        <div
                            class="input-group input-group-sm"
                            style="width: 150px"
                        >
                            <input
                                type="text"
                                name="table_search"
                                class="form-control float-right"
                                placeholder="Search"
                            />

                            <div class="input-group-append">
                                <button type="submit" class="btn btn-default">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-striped m-0">
                            <thead>
                                <tr class="text-center">
                                    <th>IP</th>
                                    <th>上线时间</th>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination
                    :page-index="workerCurrentPage"
                    :total="workerTotalCount"
                    :page-size="workerPageSize"
                    @change="workerPageChange"
                />
            </div>
        </div>

        <div class="col-md-4">
            <div class="info-box mb-3 bg-info">
                <span class="info-box-icon"><i class="fas fa-tag"></i></span>

                <div class="info-box-content">
                    <span class="info-box-text">调度中</span>
                    <span class="info-box-number">5,200</span>
                </div>
                <!-- /.info-box-content -->
            </div>
            <div class="info-box mb-3 bg-danger">
                <span class="info-box-icon"
                    ><i class="fas fa-cloud-download-alt"></i
                ></span>

                <div class="info-box-content">
                    <span class="info-box-text">执行错误</span>
                    <span class="info-box-number">114,381</span>
                </div>
                <!-- /.info-box-content -->
            </div>
            <div class="info-box mb-3 bg-success">
                <span class="info-box-icon"
                    ><i class="far fa-comment"></i
                ></span>

                <div class="info-box-content">
                    <span class="info-box-text">执行完成</span>
                    <span class="info-box-number">163,921</span>
                </div>
                <!-- /.info-box-content -->
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
        this.timer = setInterval(this.getWorkers, 1 * 30 * 1000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
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