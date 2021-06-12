<template>
    <div @click="dos">
        <form>
            <formly-form
                :form="form"
                :model="model"
                :fields="fields"
                ref="testCredentials"
            >
            </formly-form>
        </form>
        提交
        <div>
            <button
                @click="
                    $emit('sendModaloption', {
                        title: 'qqqq',
                        api: 'post.job.add',
                        form: {},
                        model: {
                            name: '',
                            command: '',
                            cronExpr: '',
                        },
                        fieldService: 'JobAddCronFields',
                    })
                "
            >
                hellow
            </button>
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            form: {},
            model: {
                name: "",
                sex: "",
                comments: "",
                ls: "",
                ca: true,
            },
            fields: [
                {
                    key: "name",
                    type: "input",
                    // 输入框外面再加一个 div
                    // wrapper: '<div class="col-12"></div>',

                    // 满足条件才会显示 input
                    // display: 'model.displayMyField === "yes"',
                    // display: function(field, model){
                    //     return model.displayMyField === 'yes';
                    // },

                    //
                    validators: {
                        length: {
                            expression: "model[field.key].length > 4",
                            message: "请输入任务名",
                        },
                    },

                    // labelClasses: { "class-A": true, "class-B": true },
                    templateOptions: {
                        label: "Your name",

                        // 失焦事件
                        // onBlur: function () {
                        //     alert(123);
                        // },
                        // 聚焦事件
                        // onFocus: function() {
                        // },

                        // onClick: function () {},
                        // onChange: function () {},
                        // onKeyup: function () {},
                        // onKeydown: function () {},
                        // atts: {placeholder: ""},

                        // input 的 class
                        // classes: {
                        //     "is-valid": false,
                        //     "is-warning": false,
                        //     "is-invalid": true,
                        // },

                        // input 上一层 div 的 class
                        // wrapperClasses: { "class-acc": true, "class-b": false },
                        // id: "",

                        // 输入框类型
                        // inputType: "checkbox",
                    },
                },
                {
                    key: "sex",
                    type: "select",
                    options: ["Male", "Female"],
                    templateOptions: {
                        label: "Sex",
                    },
                },
                {
                    key: "comments",
                    type: "textarea",
                    templateOptions: {
                        label: "Comments",
                    },
                },
                {
                    key: "ls",
                    type: "list",
                    options: [
                        { label: "Foo", value: "bar" },
                        { label: "Bar", value: "foo" },
                    ],
                    labelClasses: { "class-A": true, "class-B": true },
                    templateOptions: {
                        label: "ls",
                    },
                },
            ],
        };
    },
    mounted() {
        // console.info(this.$refs.credentials);
        // this.$refs.credentials.fields[0].templateOptions.classes[
        //     "is-valid"
        // ] = true;
        // this.$refs.credentials.fields[0].templateOptions.classes[
        //     "is-invalid"
        // ] = false;
        // console.info(
        //     !this.$refs.credentials.fields[0].templateOptions.classes[
        //         "is-valid"
        //     ]
        // );
    },
    methods: {
        dos: function () {
            this.$refs.testCredentials
                .validate()
                .then(() => {
                    if (this.form.$valid) return;
                    // submit form
                })
                .catch((e) => {
                    // do something with the error
                });
            // console.info(this.$refs.credentials);
            // console.info(this.form.$valid);
        },
    },
};
</script>