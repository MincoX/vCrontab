<template>
    <div class="card card-primary card-outline">
        <div class="card-header">
            <h3 class="card-title">集群列表</h3>
            <div class="card-tools">
                <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right"
                           placeholder="Search">

                    <div class="input-group-append">
                        <button type="submit" class="btn btn-default">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card-body p-0">
            <table class="table table-striped">
                <thead>
                    <tr class="text-center">
                        <th>IP</th>
                        <th>上线时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center" v-for="item in workerPageDatas" :key="item.id">
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

        <!-- workers -->
        <Pagination :page-index="workerCurrentPage" :total="workerTotalCount"
                    :page-size="workerPageSize" @change="workerPageChange" />

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