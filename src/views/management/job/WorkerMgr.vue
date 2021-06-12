<template>
    <div class="card-body p-0">
        <table class="table table-striped">
            <thead>
                <tr class="text-center">
                    <th>Ip</th>
                    <th>工作时间</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="text-center"
                    v-for="(item, index) in workers"
                    :key="index"
                >
                    <td>{{ item.name }}</td>
                    <td>{{ item.cronExpr }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import API from "@/network/api";
export default {
    data() {
        return {
            workers: null,
        };
    },
    mounted() {
        this.getWorkers();
    },
    methods: {
        getWorkers() {
            this.$req.fetch(API.worker.list.path, {}, {}).then((resp) => {
                if (resp.code == 200) {
                    this.workers = resp.data.workers;
                }
            });
        },
    },
};
</script>