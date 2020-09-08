// 验证码

$(".erweima").click(function () {
    var code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g']

    function yzm() {
        return Math.round(Math.random() * 16);
    }
    var arr = []
    for (var i = 0; i < 4; i++) {
        arr.push(code[yzm()]);
    }
    $(this).text(arr.join(''))
})
// 用户名
$('[name="yh"]').focus(function () {
    $(this).css("border", "1px solid #c8c8c8")
    $(this).val("")
})
$('[name="yh"]').blur(function () {
    if ($(this).val() == "") {
        $(this).css("border", "1px solid red")
        $(this).val("请输入用户名")
        return false
    }
    if (!/^[^0-9]{4,16}$/.test($(this).val())) {
        $(this).css("border", "1px solid red")
        $(this).val("格式有误：不能以数字开头")
        return false
    }
})

// 密码
$('[type="password"]').focus(function () {
    $(this).attr("type", "password")
    $(this).css("border", "1px solid #c8c8c8")
    $(this).val("")
})
$('[type="password"]').blur(function () {
    if ($(this).val() == "") {
        $(this).attr("type", "text")
        $(this).css("border", "1px solid red")
        $(this).val("请输入密码")
        return false
    }
})

// 验证码
$(".erwei").focus(function () {
    $(this).css("border", "1px solid #c8c8c8")
    $(this).val("")
})
$(".erwei").blur(function () {
    if ($(this).val() == "") {
        $(this).css("border", "1px solid red")
        $(this).val("请输入验证码")
        return false
    }
    if ($(this).val() != $(".erweima").text()) {
        $(this).css("border", "1px solid red")
        $(this).val("验证码格式有误")
        return false
    }
})

$(".but").click(function () {
    
    // 用户名
    if ($('[name="yh"]').val() == "") {
        $('[name="yh"]').css("border", "1px solid red")
        $('[name="yh"]').val("请输入用户名")
        return false
    }
    if (!/^[^0-9]{4,16}$/.test($('[name="yh"]').val())) {
        $('[name="yh"]').css("border", "1px solid red")
        $('[name="yh"]').val("格式有误：不能以数字开头")
        return false
    }
    // 密码
    if ($('[type="password"]').val() == "") {
        $('[type="password"]').attr("type", "text")
        $('[type="password"]').css("border", "1px solid red")
        $('[type="password"]').val("请输入密码")
        return false
    }
    // 验证码
    if ($(".erwei").val() == "") {
        $(".erwei").css("border", "1px solid red")
        $(".erwei").val("请输入验证码")
        return false
    }
    if ($(".erwei").val() != $(".erweima").text()) {
        $(".erwei").css("border", "1px solid red")
        $(".erwei").val("验证码格式有误")
        return false
    } else {
        alert("登录成功！点击确定2秒返回首页");
        window.open('index.html')
    }
})
