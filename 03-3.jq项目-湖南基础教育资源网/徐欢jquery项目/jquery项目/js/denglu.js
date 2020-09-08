$(function() {
    $("#myForm").validate({
        rules: {
            ming: {
                required: true,
                minlength: 2
            },
            mima: {
                required: true,
                minlength: 5
            },
            yanzhneg: {

                equalTo: "#mass"
            }
        },
        messages: {
            ming: {
                required: "昵称必填！",
                minlength: "昵称名长度在2个以上"
            },
            mima: {
                required: "密码需要填写",
                minlength: "密码长度不能小于 5 个字符"
            },
            yanzhneg: {

                equalTo: "验证码不同"
            }
        }
    })
})
window.onload = function() {
    var ma = document.getElementsByClassName("yan")[0].children[1]

    // 随机数
    var code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g']

    function yzm() {
        return Math.round(Math.random() * 16);
    }
    var arr = []
    for (var i = 0; i < 4; i++) {
        arr.push(code[yzm()]);
    }
    ma.innerText = arr.join('');

}