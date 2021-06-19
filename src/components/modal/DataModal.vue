<template>
    <div class="modal fade" id="modal-xl" style="display: none" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-body">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">{{ title }}</h3>
                        <div class="card-tools">
                            <ul class="pagination pagination-sm float-right">
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
                    </div>
                    <div class="card-body p-0">
                        <table class="table">
                            <thead>
                                <tr class="text-center">
                                    <th v-for="item in columns" :key="item.id">
                                        {{ item.name }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="direct-chat-text text-center" style="margin: auto;"
                                    v-if="!datas">
                                    暂时没有日志输出
                                </tr>
                                <tr v-for="data in datas" :key="data.id" class="text-center">
                                    <td v-for="item in columns" :key="item.id">
                                        {{ data[item.alias] }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        title: {
            type: String,
        },
        columns: {
            type: Array,
        },
        datas: {
            type: Array,
        },
    },
};
</script>
