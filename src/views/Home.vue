<template>
    <div class="wrapper">
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
                        style="left: inherit; right: 0px"
                    >
                        <a href="#" class="dropdown-item dropdown-footer">
                            <li class="user-header">
                                <img
                                    src="~@/assets/img/profile.png"
                                    class="img-circle user-image"
                                    alt="User Image"
                                />
                                <p>
                                    <strong>
                                        {{ userInfo.username }}(管理员)
                                    </strong>
                                </p>
                                <p>
                                    <small>
                                        账户创建于：
                                        {{ dateFormat(userInfo.created_at) }}
                                    </small>
                                </p>
                            </li>
                        </a>

                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item dropdown-footer">
                            <div class="float-left">
                                <a href="#" class="btn btn-default btn-flat">
                                    修改信息
                                </a>
                            </div>
                            <div class="float-right">
                                <a
                                    href="#"
                                    class="btn btn-default btn-flat"
                                    @click.prevent
                                    ><span @click="loginOut">退出登录</span>
                                </a>
                            </div>
                        </a>
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
                                    Dashboard
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
                                        <p>dashboard1</p>
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
                                        <p>vue-formly</p>
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

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
</template>

<script>
import API from "@/network/api";
import FormModal from "@/components/modal/FormModal";

export default {
    data() {
        return {
            modalOptions: null,
            userInfo: {},
        };
    },
    components: {
        FormModal,
    },
    mounted() {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    },
    methods: {
        sendModaloption: function (opts) {
            this.modalOptions = opts;
        },
        loginOut: function () {
            this.$req
                .fetch(API.user.loginOut.path, {}, { successNotify: true })
                .then((resp) => {
                    if (resp.code == 200) {
                        localStorage.removeItem("token");
                        localStorage.removeItem("userInfo");
                        this.$router.push("/login");
                    }
                });
        },
        dateFormat(time) {
            var date = new Date(time);
            var year = date.getFullYear();
            /* 在日期格式中，月份是从0开始的，因此要加0
             * 使用三元表达式在小于10的前面加0，以达到格式统一 如 09:11:05
             * */
            var month =
                date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1;
            var day =
                date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hours =
                date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            var minutes =
                date.getMinutes() < 10
                    ? "0" + date.getMinutes()
                    : date.getMinutes();
            var seconds =
                date.getSeconds() < 10
                    ? "0" + date.getSeconds()
                    : date.getSeconds();
            // 拼接
            return year + "-" + month + "-" + day + " ";
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
</style>
