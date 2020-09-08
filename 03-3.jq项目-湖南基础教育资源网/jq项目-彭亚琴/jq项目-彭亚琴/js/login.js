$(function() {
	$(".main").submit(function() {
		var reg=/^\w{3}$/;
		if (!reg.test($("#i1").val())) {
			$(".title").text("用户名错误");
			return false;
		}
		var reg1=/[a-zA-Z0-9]{6}/;
		if (!reg1.test($("#i2").val())) {
			$(".title").text("密码错误");
			return false;
		}
		if ($("#i3").val()!="spoi") {
			$(".title").text("验证码错误");
			return false;
		}
	});
});

