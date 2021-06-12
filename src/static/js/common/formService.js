export default {
    JobAddCronFields: function () {
        return [
            {
                key: 'name',
                type: 'input',
                required: true,
                templateOptions: setOptions("任务名", "请输入任务名"),
                validators: {
                    valCheck: {
                        expression(field, model, next) {
                            next(
                                model[field.key].length > 3 && model[field.key].indexOf(' ') == -1
                            );
                        },
                        message: '任务名至少输入四个字符，且不能包含空格'
                    }
                },
            },
            {
                key: 'command',
                type: 'input',
                required: true,
                templateOptions: setOptions("command", "请输入执行命令"),
                validators: {
                    valCheck: {
                        expression(field, model, next) {
                            next(
                                model[field.key].length > 0
                            );
                        },
                        message: '执行命令不能为空'
                    }
                },
            },
            {
                key: 'cronExpr',
                type: 'input',
                required: true,
                templateOptions: setOptions("cronExpr", "请输入定时表达式"),
                validators: {
                    valCheck: {
                        expression(field, model, next) {
                            next(
                                model[field.key].length > 0
                            );
                        },
                        message: '定时表达式不能为空'
                    }
                },
            },
        ]
    },
    JobAddOneceFields: function () {
        return [
            {
                key: 'name',
                type: 'input',
                required: true,
                templateOptions: setOptions("任务名", "请输入任务名"),
                validators: {
                    valCheck: {
                        expression(field, model, next) {
                            next(
                                model[field.key].length > 3 && model[field.key].indexOf(' ')
                            );
                        },
                        message: '任务名至少三个字符，且不能包含空格'
                    }
                },
            },
            {
                key: 'command',
                type: 'input',
                required: true,
                templateOptions: setOptions("command", "请输入执行命令"),
                validators: {
                    valCheck: {
                        expression(field, model, next) {
                            next(
                                model[field.key].length > 0
                            );
                        },
                        message: '执行命令不能为空'
                    }
                },
            },
        ]
    },
    example: function () {
        return [
            {
                key: 'sex',
                type: 'select',
                options: ['Male', 'Female'],
                templateOptions: {
                    label: 'Sex'
                }

            },
            {
                key: 'status',
                type: 'select',
                templateOptions: { label: '账号状态' },
                options: [
                    { label: '禁用', value: false },
                    { label: '激活', value: true },
                ],
            },
        ]
    }
}

function OnfocusStyle(_this) {
    _this.field.templateOptions.classes = {
        "is-valid": false,
        "is-warning": true,
        "is-invalid": false,
    }
}

function onBlurStyle(_this) {
    // 若 hasError 
    let isOK = !Boolean(_this.form.$errors[_this.field.key].valCheck)
    if (isOK) {
        // 验证成功
        _this.field.templateOptions.classes = {
            "is-valid": true,
            "is-warning": false,
            "is-invalid": false,
        }
    } else {
        // 验证失败
        _this.field.templateOptions.classes = {
            "is-valid": false,
            "is-warning": false,
            "is-invalid": true,
        }
    }
}

function setOptions(label, placeholder) {
    return {
        label: label,
        atts: { placeholder: placeholder },
        onBlur: function (e) {
            onBlurStyle(this)
        },
        onFocus: function () {
            OnfocusStyle(this)
        }
    }
}
