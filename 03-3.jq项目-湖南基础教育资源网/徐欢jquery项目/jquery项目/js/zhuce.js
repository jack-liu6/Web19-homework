$(function() {
    // 固定定位的弹出框
    $(".zhanghao .liji").bind("click", function() {
        $(".wei").fadeIn()
        $(".juedui").slideDown("slow")
        return false
    })
    $(".cha").bind("click", function() {
        $(".juedui").slideUp("slow")
        $(".wei").fadeOut()
    })

    // 学生与教师的切换
    $(".daohang span").click(function() {
        $(this).addClass("zhucelan").siblings().removeClass("zhucelan")
        $(".chu").eq($(this).index()).show().siblings().hide()
    })

    //验证注册 
    // var a = /[0-9a-zA-Z_]{6,10}$/g
    // $.validator.addMethod("af", function(value, element, ming) {
    //     if (value == a) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }, "只允许为字母、 下划线和数字!")
    $.validator.addMethod("pa", function(value) {
        if (value.length != 18) {
            return false
        } else {
            return true
        }
    }, "身份证为18位数")
    $("#mtmy").validate({
        rules: {
            ming: {
                required: true

                // af: true
            },
            mima: {
                required: true,
                rangelength: [6, 12]
            },
            qdmima: {
                required: true,
                rangelength: [6, 12],
                equalTo: "#passd"
            },
            xingming: "required",
            haoma: {
                pa: true
            },
            gender: "required",
            wenti: "required",
            daan: "required",
            mail: {
                required: true,
                email: true
            }
        },
        messages: {
            ming: {
                required: "为必填项"
            },
            mima: {
                required: "为必填项",
                rangelength: "密码长度必须在6-12个字符之间"
            },
            qdmima: {
                required: "为必填项",
                rangelength: "密码长度必须在6-12个字符之间",
                equalTo: "密码不相同"
            },
            xingming: "请输入你的姓名",
            gender: "请选择你的性别",
            wenti: "请输入问题",
            daan: "请输入你的答案",
            mail: {
                required: "为必填项",
                email: "请输入有效的电子邮件地址"
            }

        }
    })
    $("#jiaosf").validate({
        rules: {
            name: {
                required: true,
                rangelength: [4, 16]
            },
            pass: {
                required: true,
                rangelength: [6, 12]
            },
            passque: {
                required: true,
                rangelength: [6, 12],
                equalTo: "#que"
            },
            dizhi: {
                required: true,
                email: true
            },
            agree: {
                required: true
            }
        },
        messages: {
            name: {
                required: "请填写",
                rangelength: "字符在4-16个长度间"
            },
            pass: {
                required: "请填写",
                rangelength: "密码长度在6-12之间"
            },
            passque: {
                required: "请填写",
                rangelength: "密码长度在6-12之间",
                equalTo: "密码不同"
            },
            dizhi: {
                required: "请填写",
                email: "请输入有效的电子邮件地址"
            },
            agree: {
                required: "请同意"
            }
        }
    })
})

window.onload = function() {
    // 注册页面的
    laydate.render({
        elem: '#riqi' //指定元素
    });
}