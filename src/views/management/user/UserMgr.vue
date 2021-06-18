<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">用户列表</h3>
            <div class="card-tools">
                <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="collapse"
                    title="Collapse"
                >
                    <i class="fas fa-minus"></i>
                </button>
                <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="remove"
                    title="Remove"
                >
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <div class="card-body p-0">
            <table class="table table-striped projects">
                <thead>
                    <tr class="text-center">
                        <th>用户名</th>
                        <th>用户角色</th>
                        <th>手机</th>
                        <th>邮箱</th>
                        <th>账户状态</th>
                        <th>账户创建时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td>MincoX</td>
                        <td>普通管理员</td>
                        <td>19988886666</td>
                        <td>666666@66.com</td>
                        <td>2021/06/16 06:08:06</td>
                        <td>激活</td>
                        <td>
                            <a
                                class="btn btn-info btn-sm"
                                href="#"
                                @click="
                                    $emit('sendModaloption', {
                                        title: '修改信息',
                                        apiObj: 'post.user.update',
                                        form: {},
                                        model: {
                                            id: '',
                                            email: '',
                                            username: '',
                                            telephone: '',
                                            reqTyp: '0',
                                        },
                                        fieldService: 'UserUpdateInfoFields',
                                    })
                                "
                            >
                                <i class="fas fa-pencil-alt"> </i>
                                修改信息
                            </a>
                            <a class="btn btn-danger btn-sm" href="#">
                                <i class="fas fa-trash"> </i>
                                删除用户
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: { username: 132 },
        };
    },
};
</script>
