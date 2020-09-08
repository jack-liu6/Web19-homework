// 注册框切换
$(".register_a").click(function(){
    $(this).addClass("in").siblings().removeClass("in");
    $(".regi_box").eq($(this).index()).show().siblings().hide()
    $(".jian").eq($(this).index()).show().siblings().hide()
})

// 立即登录框
$(".yiyou a")[0].addEventListener('click',function(e){
    e.stopPropagation();
    $(".deng").show()
  });

//   document.addEventListener('click',function(){
//       $(".deng").hide()
// })

// 个人会员登录验证

$(".deng_b").click(function(){
    if($('.deng_name').val()==""){
        $('.deng_name').val("请输入用户名")
        $('.deng_name').css("border","1px solid red")
        return false
    }
    if($(".deng_pass").val()==""){
        $('.deng_pass').val("请输入密码")
        $('.deng_pass').css("border","1px solid red")
        return false
    }else{
        alert("登录成功！点击确定2秒返回首页");
        function jumurl() {
            window.location.href = "index.html"
        }
        setTimeout(jumurl,2000)
    }
})
$('.deng_name').focus(function(){
    $(this).val("");
    $('.deng_name').css("border","1px solid #ccc")
})
$('.deng_pass').focus(function(){
    $(this).val("");
    $('.deng_pass').css("border","1px solid #ccc")
})
// 提交时隐藏提示文字
$('[type="submit"]').click(function () {
    $(".tips_hide").hide();
    if ($('[name="sex"]')[0].checked == false) {
        $(".sex_").show()
    }
    if ($('[name="sex"]')[0].checked == true||$('[name="sex"]')[1].checked == true) {
        $(".sex_").hide()
    }
})


// 获取焦点时隐藏提示文字
$('[name="user_name"]').focus(function () {
    $(this).next().hide()
})
$('[name="password"]').focus(function () {
    $(this).next().hide()
})
$('[name="confirm_password"]').focus(function () {
    $(this).next().hide()
})
$('[name="real_name"]').focus(function () {
    $(this).next().hide()
})
$('[name="id_number"]').focus(function () {
    $(this).next().hide()
})
$('[name="question"]').focus(function () {
    $(this).next().hide()
})
$('[name="answer"]').focus(function () {
    $(this).next().hide()
})
$('[name="birthday"]').focus(function () {
    $(this).next().hide()
})
$('[name="email"]').focus(function () {
    $(this).next().hide()
})

jQuery.validator.addMethod("regex", //addMethod第1个参数:方法名称
    function (value, element, params) {//addMethod第2个参数:验证方法，参数（被验证元素的值，被验证元素，参数）
        var exp = new RegExp(params);//实例化正则对象，参数为传入的正则表达式
        return exp.test(value);         //测试是否匹配
    }, "格式错误")

$("#register_form").validate({

    // 规则
    rules: {
        // 用户名
        user_name: {
            required: true,
            minlength: 2
        },
        // 密码
        password: {
            required: true,
            minlength: 2,
            maxlength: 6
        },
        // 确认密码
        confirm_password: {
            required: true,
        },
        // 真实姓名
        real_name: {
            required: true,
        },
        // 身份证
        id_number: {
            required: true,
            minlength: 12,
            maxlength: 12
        },
        // 问题
        question: {
            required: true
        },
        // 答案
        answer: {
            required: true
        },
        // 电子邮箱
        email: {
            required: true,
            regex: /^[\w-]+@[a-z0-9]{2,3}\.[a-z]{2,5}$/i
        },
        // 性别
        sex:{
            required: true
        }
    },
    // 提示
    messages: {
        // 用户名
        user_name: {
            required: "用户名不能为空",
            minlength: "最小长度为2"
        },
        // 密码
        password: {
            required: "密码不能为空",
            minlength: "最小长度为2",
            maxlength: "最大长度为6"
        },
        // 确认密码
        confirm_password: {
            required: "确认密码不能为空"
        },
        // 真实姓名
        real_name: {
            required: "真实姓名不能为空"
        },
        // 身份证
        id_number: {
            required: "身份证不能为空",
            minlength: "请输入12位的身份证号码",
            maxlength: "请输入12位的身份证号码"
        },
        // 问题
        question: {
            required: "问题不能为空"
        },
        // 答案
        answer: {
            required: "答案不能为空"
        },
        // 电子邮箱
        email: {
            required: "邮箱不能为空",
            regex: "邮箱格式有误"
        },
        // 性别
        sex:{
            required: "请选择性别"
        }
    },
    //验证成功执行函数 
    submitHandler: function (form) { //验证成功时调用
        alert("您已注册成功，三秒后跳转登录页面！")
        // 跳转登录页面
        function jumurl() {
            window.location.href = "signIn.html"
        }
        setTimeout(jumurl, 3000)
    }
})
// 快速注册验证

// 用户名
$('[name="fast_userName"]').focus(function () {
    $(this).val("");
    $(".nametips").show();
    if ($(".no_tips_name").css("display") == "block") {
        $(".nametips").hide();
    }
})

$('[name="fast_userName"]').blur(function () {
    $(this).css("border", "1px solid #c7c7c7");
    $(".nametips").hide();
    if ($(this).val() == "") {
        $(".no_tips_name").show();
        $(".name_tips").text("用户名不能为空");
        $(".nametips").hide();
        return false
    }
    if (!/^[^0-9]{4,16}$/.test($(this).val())) {
        $(".no_tips_name").show();
        $(".name_tips").text("用户名格式有误");
        $(".nametips").hide();
        return false
    } else {
        $(".no_tips_name").hide();
        $(".nametips").hide();
    }
})

$('[name="fast_password"]').focus(function () {
    $(this).val("");
    $(".passlen").show();
    if ($(".no_tips_password").css("display") == "block") {
        $(".passlen").hide();
    }
})

$('[name="fast_password"]').blur(function () {
    $(this).css("border", "1px solid #c7c7c7");
    $(".passlen").hide();
    if ($(this).val() == "") {
        $(".no_tips_password").show();
        $(".word_tips").text("密码不能为空");
        $(".passlen").hide();
        return false
    }
    if (!/^[a-zA-Z0-9]{6,12}$/g.test($(this).val())) {
        $(".no_tips_password").show();
        $(".word_tips").text("密码格式有误");
        $(".passlen").hide();
        return false
    } else {
        $(".no_tips_password").hide();
        $(".passlen").hide();
    }
})

// 确认密码
$('[name="fast_confirmPassword"]').focus(function () {
    $(this).val("")
})
$('[name="fast_confirmPassword"]').blur(function () {
    $(this).css("border", "1px solid #c7c7c7");
    if ($(this).val() == "") {
        $(".no_tips_password2").show();
        $(".word2_tips").text("确认密码不能为空")
    }
    if ($(this).val() != $('[name="fast_password"]').val()) {
        $(".no_tips_password2").show();
        $(".word2_tips").text("密码不一致")
    } else {
        $(".no_tips_password2").hide()
    }
})

// 邮箱
$('[name="fast_email"]').focus(function () {
    $(this).val("")
})

$('[name="fast_email"]').blur(function () {
    $(this).css("border", "1px solid #c7c7c7");
    if ($(this).val() == "") {
        $(".no_tips_email").show();
        $(".email_tips").text("邮箱不能为空")
    }
    if (!/^[\w-]+@[a-z0-9]{2,3}\.[a-z]{2,5}$/i.test($(this).val())) {
        $(".no_tips_email").show();
        $(".email_tips").text("邮箱格式有误")
    } else {
        $(".no_tips_email").hide()
    }
})

// 提交按钮
$(".fast_submit").click(function () {
    // 用户名
    if ($('[name="fast_userName"]').val() == "") {
        $(".no_tips_name").show();
        $(".name_tips").text("用户名不能为空");
        $(".nametips").hide();
        return false
    }
    if (!/^[^0-9]{4,16}$/.test($('[name="fast_userName"]').val())) {
        $(".no_tips_name").show();
        $(".name_tips").text("用户名格式有误");
        $(".nametips").hide();
        return false
    } else {
        $(".no_tips_name").hide();
        $(".nametips").hide();
    }
    // 密码
    if ($('[name="fast_password"]').val() == "") {
        $(".no_tips_password").show();
        $(".word_tips").text("密码不能为空");
        $(".passlen").hide();
        return false
    }
    if (!/^[a-zA-Z0-9]{6,12}$/g.test($('[name="fast_password"]').val())) {
        $(".no_tips_password").show();
        $(".word_tips").text("密码格式有误");
        $(".passlen").hide();
        return false
    } else {
        $(".no_tips_password").hide();
        $(".passlen").hide();
    }
    // 确认密码
    if ($('[name="fast_confirmPassword"]').val() == "") {
        $(".no_tips_password2").show();
        $(".word2_tips").text("确认密码不能为空")
        return false
    }
    if ($('[name="fast_confirmPassword"]').val() != $('[name="fast_password"]').val()) {
        $(".no_tips_password2").show();
        $(".word2_tips").text("密码不一致")
        return false
    } else {
        $(".no_tips_password2").hide()
    }
    // 邮箱
    if ($('[name="fast_email"]').val() == "") {
        $(".no_tips_email").show();
        $(".email_tips").text("邮箱不能为空")
        return false
    }
    if (!/^[\w-]+@[a-z0-9]{2,3}\.[a-z]{2,5}$/i.test($('[name="fast_email"]').val())) {
        $(".no_tips_email").show();
        $(".email_tips").text("邮箱格式有误")
        return false
    } else {
        $(".no_tips_email").hide()
    }
    // 同意按钮
    if ($("#agree")[0].checked == false) {
        $(".no_tips_agree").show();
        $(".agree_tips").text("请勾选协议");
        return false
    }else{
        alert("您已注册成功，点击确定跳转登录页面！")
        // 跳转登录页面
       window.open("signIn.html")
    }
})

laydate.render({
    elem: '#birthday'
});

$(".close").click(function(){
    $(this).parent().hide()
})