<template>
    <div class="modal fade show" id="modal-default" aria-hidden="true">
        <div class="show"></div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="card card-primary card-outline update-userinfo">
                    <div class="card-body box-profile">
                        <div class="text-center">
                            <img class="profile-user-img img-fluid img-circle"
                                 src="~@/assets/img/profile.png" alt="User profile picture" />
                        </div>

                        <h3 class="profile-username text-center">
                            {{ userInfo.username }}(管理员)
                        </h3>

                        <p class="text-muted text-center">
                            账户创建于: {{ userInfo.created_at | formatDate }}
                        </p>

                        <div class="form-group">
                            <label>US phone mask:</label>

                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i data-v-fae5bece=""
                                           class="fas fa-envelope"></i></span>
                                </div>
                                <input type="text" class="form-control"
                                       data-inputmask='"mask": "(999) 999-9999"' data-mask=""
                                       inputmode="text" />
                            </div>
                            <!-- /.input group -->
                        </div>

                        <div class="form-group">
                            <label>US phone mask:</label>

                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i
                                           class="fas fa-phone"></i></span>
                                </div>
                                <input type="text" class="form-control"
                                       data-inputmask='"mask": "(999) 999-9999"' data-mask=""
                                       inputmode="text" />
                            </div>
                            <!-- /.input group -->
                        </div>

                        <div class="form-group">
                            <label>Custom Select</label>
                            <select class="custom-select">
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                                <option>option 4</option>
                                <option>option 5</option>
                            </select>
                        </div>

                        <a href="#" class="btn btn-primary btn-block"><b>确认修改</b></a>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        userInfo: {
            type: Object,
        },
    },
    data() {
        return {};
    },
    mounted() { },
    methods: {},
};
</script>


<style lang="scss" scoped>
.update-userinfo {
    margin: 0px;
}
</style>