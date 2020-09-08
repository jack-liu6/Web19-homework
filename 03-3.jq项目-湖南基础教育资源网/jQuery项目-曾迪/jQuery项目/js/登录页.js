// 表单验证
$(".form-dl").validate({
    // 校验规则，即在这里写哪些控件需要被验证
    rules: {
      // 具体的控件名
      // 格式： 控件name名：规则
      // 格式：控件的name名：{ 规则1，规则2}
            yh: {
                required:true,
                minlength:2
            },
            mima:{
                required:true,
                minlength:6,
                maxlength:12
            }
    },
//通过message改写默认的系统提示信息
    message:{
        yh:{
            required:"用户名必填！",
            minlength:"用户名长度在2个以上"
        },
        mima:{
            required:"密码非空",
            minlength:"最小长度要6位以上",
            maxlength:"最大长度不能大于12位"
        }
    }
});