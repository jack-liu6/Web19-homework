;
(function ($) {
    $(function () {
        // 设置点击切换
        $(".main h2 span").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".reg-content-left form").eq($(this).index()).fadeIn().siblings().hide();
        })
        // 设置日期插件
        laydate.render({
            elem: '#bir',
            max: 0
        });
        //  设置表单验证
        $("#form1").validate({
            rules: {
                // 设置用户名
                user: {
                    required: true,
                    chrnum1:true
                },
                // 设置密码
                pw: {
                    required: true,
                    minlength: 6,
                    maxlength: 12
                },
                // 设置确认密码
                pw2: {
                    required: true,
                    minlength: 6,
                    maxlength: 12,
                    equalTo:"#pw"
                },
                // 设置真实姓名
                tname: {
                    required: true,
                },
                // 设置身份证号码
                idnum: {
                    isIdCardNo1:true
                },
                // 设置性别
                sex: {
                    required: true,
                },
                // 设置问题
                ques: {
                    required: true,
                },
                // 设置答案
                answer: {
                    required: true,
                },
                // 设置生日
                bir: {

                },
                // 设置邮箱
                mail: {
                    email:true,
                },
            },
            messages: {
                // 设置用户名
                user: {
                    required: "用户名必填",
                    
                },
                // 设置密码
                pw: {
                    required: "密码必填",
                    minlength: "密码长度必须在6-12个字符之间",
                    maxlength: "密码长度必须在6-12个字符之间"
                },
                // 设置确认密码
                pw2: {
                    required: "请再输入一次密码",
                    minlength: "密码长度必须在6-12个字符之间",
                    maxlength: "密码长度必须在6-12个字符之间",
                    equalTo:"两次输入不一致"
                },
                // 设置真实姓名
                tname: {
                    required: "非真实姓名学校管理员将停用账号",
                },
                // 设置身份证号码
                idnum: {

                },
                // 设置性别
                sex: {
                    required: "性别必选",
                },
                // 设置问题
                ques: {
                    required: "忘记密码时，可通过该问题取回您的密码",
                },
                // 设置答案
                answer: {
                    required: "取回密码时问题的答案",
                },
                // 设置生日
                bir: {

                },
                // 设置邮箱
                mail: {
                    email:"请输入有效的电子邮箱地址",
                },
            },
            // 错误信息的提示位置
            errorPlacement:function(error,element){
                error.appendTo(element.parent());
            },
            // 调用错误信息提示的样式
            errorElement: "em", //可以用其他标签，记住把样式也对应修改
            success: function(label) {
                //label指向上面那个错误提示信息标签em
                label.text(" ")                //清空错误提示消息
                    //.addClass("success");    //加上自定义的success类
            }
        });
    })
})(jQuery)