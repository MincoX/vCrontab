<template>
    <div
        class="modal fade show"
        id="modal-default"
        style="display: block; padding-right: 17px"
        aria-modal="true"
        v-if="show"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{ title }}</h4>
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true" @click="show = false">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <formly-form
                        :form="form"
                        :model="model"
                        :fields="fields"
                        ref="credentials"
                    ></formly-form>
                </div>
                <div class="modal-footer justify-content-between">
                    <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                        @click="show = false"
                    >
                        取消
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="formValid"
                    >
                        确认
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from "@/network/api";
import FormService from "@/static/js/common/formService";

export default {
    inject: ["reload"],
    props: {
        modalOptions: {
            type: Object,
            default: {},
        },
    },
    data() {
        return {
            show: false,

            title: "",
            form: {},
            model: {},
            fields: [],

            method: "",
            apiObj: {},
        };
    },
    watch: {
        modalOptions: function (newOption, oldOption) {
            this.show = true;
            this.setModalOption(newOption);
        },
    },
    methods: {
        setModalOption(opts) {
            var title = opts.title;

            // request
            var mods = opts.apiObj.split(".");
            var method = mods[0];
            var apiObj = API[mods[1]][mods[2]];

            // form
            if (opts.form != undefined) {
                var form = JSON.parse(JSON.stringify(opts.form));
            } else {
                var form = {};
            }

            // fields
            if (opts.fields == undefined) {
                if (opts.fieldService != undefined) {
                    var fields = FormService[opts.fieldService]();
                } else {
                    var fields = [];
                }
            } else {
                var fields = binding.value.fields;
            }

            // model
            var model = JSON.parse(JSON.stringify(opts.model));

            this.title = title;
            this.method = method;
            this.apiObj = apiObj;
            this.form = form;
            this.model = model;
            this.fields = fields;
        },
        formValid() {
            this.$refs.credentials
                .validate()
                .then(() => {
                    if (!this.form.$valid) return;
                    this.submit();
                })
                .catch((e) => {});
        },
        submit() {
            this.show = false;
            if (this.method == "post") {
                this.$req
                    .post(
                        this.apiObj.path,
                        JSON.parse(JSON.stringify(this.model))
                    )
                    .then((resp) => {
                        if (resp.code == 200) {
                            this.reload();
                        }
                    });
            } else {
                this.$req
                    .fetch(this.apiObj.path, this.model, {
                        successNotify: true,
                    })
                    .then((res) => {
                        if (resp.code == 200) {
                            this.reload();
                        }
                    });
            }
        },
    },
};
</script>

<style scoped lang='scss'>
.modal {
    background-color: rgba(0, 0, 0, 0.8);
    .modal-dialog {
        margin-top: 180px;
    }
    .modal-body {
        height: auto;
        width: auto;
        overflow: scroll;
    }
    //定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸
    ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
    }
    //定义滑块 内阴影+圆角
    ::-webkit-scrollbar-thumb {
        border-radius: 1em;
        background-color: rgba(50, 50, 50, 0.3);
    }
    //定义滚动条轨道 内阴影+圆角
    ::-webkit-scrollbar-track {
        border-radius: 1em;
        background-color: rgba(50, 50, 50, 0.1);
    }
}
</style>