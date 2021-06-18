<template>
    <div class="wrapper">
        <UpdateInfo :userInfo="userInfo" />
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <form class="form-inline">
                <div class="input-group input-group-sm">
                    <input
                        class="form-control form-control-navbar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <div class="input-group-append">
                        <button class="btn btn-navbar" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                        <button
                            class="btn btn-navbar"
                            type="button"
                            data-widget="navbar-search"
                        >
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </form>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown show">
                    <i
                        data-toggle="dropdown"
                        aria-expanded="true"
                        class="fas fa-user-cog"
                        style="font-size: 26px; cursor: pointer"
                    ></i>

                    <div
                        class="
                            dropdown-menu dropdown-menu-lg dropdown-menu-right
                        "
                    >
                        <div
                            class="card-header text-muted border-bottom-0"
                        ></div>
                        <div
                            class="card-body pt-0"
                            data-toggle="modal"
                            data-target="#modal-default"
                        >
                            <div class="row">
                                <div class="col-8">
                                    <h2 class="lead">
                                        <b>{{ userInfo.username }}(管理员)</b>
                                    </h2>
                                    <p class="text-muted text-sm">
                                        <strong>账户创建于: </strong>
                                        {{ userInfo.created_at | formatDate }}
                                    </p>
                                    <ul
                                        class="list-group list-group-unbordered"
                                    >
                                        <li class="list-group-item">
                                            <span
                                                ><i class="fas fa-phone"></i
                                                >&nbsp;&nbsp;</span
                                            >
                                            <a>19298886688</a>
                                        </li>
                                        <li class="list-group-item">
                                            <span
                                                ><i class="fas fa-envelope"></i
                                                >&nbsp;&nbsp;</span
                                            >
                                            <a>903444601@qq.com</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-4 text-center header-img-box">
                                    <img
                                        src="~@/assets/img/profile.png"
                                        alt="user-avatar"
                                        class="
                                            img-circle img-fluid
                                            profile-user-img
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="text-right">
                                <a
                                    href="#"
                                    class="btn btn-sm btn-primary float-left"
                                    @click="
                                        sendModaloption({
                                            title: '修改密码',
                                            apiObj: 'post.user.update',
                                            model: {
                                                reqTyp: 1,
                                                oldPwd: '',
                                                newPwd: '',
                                                reNewPwd: '',
                                            },
                                            fieldService: 'UserUpdatePwdFields',
                                        })
                                    "
                                >
                                    修改密码
                                </a>
                                <a href="#" class="btn btn-sm btn-primary">
                                    <span @click="logout">退出登录</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <a href="" class="brand-link text-center">
                <span class="brand-text font-weight-light">任务调度中心</span>
            </a>

            <div class="sidebar">
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img
                            src="~@/assets/img/profile.png"
                            class="img-circle user-image"
                            alt="User Image"
                        />
                    </div>
                    <div class="info">
                        <a href="#" class="d-block">{{ userInfo.username }}</a>
                    </div>
                </div>
                <nav class="mt-2">
                    <ul
                        class="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li class="nav-item has-treeview menu-open">
                            <a href="#" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Index
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link
                                        to="/index/index1"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>index1</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link
                                        to="/index/index2"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>index2</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link
                                        to="/index/index3"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>index3</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul
                        class="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li class="nav-item has-treeview menu-open">
                            <a href="#" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    大屏展板
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link
                                        to="/dashboard1"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>dashboard</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul
                        class="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li class="nav-item has-treeview menu-open">
                            <a href="#" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    任务中心
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link
                                        to="/job/jobmgr"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>任务管理</p>
                                    </router-link>
                                </li>

                                <li class="nav-item">
                                    <router-link
                                        to="/job/workermgr"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>集群管理</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul
                        class="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li class="nav-item has-treeview menu-open">
                            <a href="#" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    用户中心
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link
                                        to="/user/usermgr"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>用户管理</p>
                                    </router-link>
                                </li>

                                <li class="nav-item">
                                    <router-link
                                        to="/user/permitionmgr"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>权限管理</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul
                        class="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li class="nav-item has-treeview menu-open">
                            <a href="#" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    测试
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link
                                        to="/test/vformly"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>modal-formaly</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <!-- /.content-header -->
            <br />
            <!-- Main content -->
            <section class="content">
                <form-modal :modalOptions="modalOptions"></form-modal>
                <router-view @sendModaloption="sendModaloption" />
                <!-- /.container-fluid -->
            </section>
            <!-- /.content -->
        </div>

        <!-- /.content-wrapper -->
        <footer class="main-footer">
            <strong> MincoX 2021 </strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
                <b>Version</b> 3.0.0
            </div>
        </footer>
    </div>
</template>

<script>
import API from "@/network/api";
import FormModal from "@/components/modal/FormModal";
import UpdateInfo from "@/components/user/UpdateInfo";

export default {
    data() {
        return {
            modalOptions: null,
            userInfo: {},
        };
    },
    components: {
        FormModal,
        UpdateInfo,
    },
    mounted() {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    },
    methods: {
        sendModaloption: function (opts) {
            this.modalOptions = opts;
        },
        logout: function () {
            this.$req
                .fetch(API.user.logout.path, {}, { successNotify: true })
                .then((resp) => {
                    if (resp.code == 200) {
                        localStorage.removeItem("token");
                        localStorage.removeItem("userInfo");
                        this.$router.push("/login");
                    }
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.underly {
    z-index: 1;
}
.userinfo-box {
    border: 1px solid red;
    position: absolute;
    left: 0px;
}
.dropdown-menu-lg {
    min-width: 390px;
}
.profile-user-img {
    width: 130px;
}
.card-body {
    cursor: pointer;
    padding: 0px 20px;
}
.card-footer {
    padding: 8px 20px;
}
.header-img-box {
    margin-top: 10px;
}
</style>
