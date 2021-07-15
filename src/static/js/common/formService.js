export default {
  UserUpdateInfoFields: function () {
    return [{
        key: 'username',
        type: 'input',
        required: true,
        templateOptions: setOptions("用户名", "请输入用户名"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '不能输入空值'
          }
        },
      },
      {
        key: 'telephone',
        type: 'input',
        required: true,
        templateOptions: setOptions("手机号", "请输入手机号"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '不能输入空值'
          }
        },
      },
      {
        key: 'email',
        type: 'input',
        required: true,
        templateOptions: setOptions("邮箱", "请输入电子邮箱"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key] == model['newPwd']
              );
            },
            message: '两次密码不一致'
          }
        },
      },
    ]
  },
  UserUpdatePwdFields: function () {
    return [{
        key: 'oldPwd',
        type: 'input',
        required: true,
        templateOptions: setOptions("原密码", "请输入原密码", "password"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '不能输入空值'
          }
        },
      },
      {
        key: 'newPwd',
        type: 'input',
        required: true,
        templateOptions: setOptions("新密码", "请输入新密码", "password"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '不能输入空值'
          }
        },
      },
      {
        key: 'reNewPwd',
        type: 'input',
        required: true,
        templateOptions: setOptions("确认密码", "请再次输入新密码", "password"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key] == model['newPwd']
              );
            },
            message: '两次密码不一致'
          }
        },
      },
    ]
  },
  JobAddCronFields: function () {
    return [{
        key: 'name',
        type: 'input',
        required: true,
        templateOptions: setOptions("任务名", "请输入任务名"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '任务名不能为空'
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
        templateOptions: setOptions("cronExpr", "秒 分 时 月几 月 周几 年"),
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
  JobAddOnceFields: function () {
    return [{
        key: 'name',
        type: 'input',
        required: true,
        templateOptions: setOptions("任务名", "请输入任务名"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '任务名不能为空'
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
    return [{
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
        templateOptions: {
          label: '账号状态'
        },
        options: [{
            label: '禁用',
            value: false
          },
          {
            label: '激活',
            value: true
          },
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

function setOptions(label, placeholder, type) {
  return {
    label: label,
    atts: {
      placeholder: placeholder,
      type: type
    },
    onBlur: function (e) {
      onBlurStyle(this)
    },
    onFocus: function () {
      OnfocusStyle(this)
    }
  }
}