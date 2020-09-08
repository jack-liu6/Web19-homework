$(function() {
	$("#myform").submit(function() {
		//用户名验证
		var reg1=/^\w{3}$/;
		if (!reg1.test($('#ipt1').val())) {
			$('.title1').text('只允许为字母、数字和下划线');
			return false;
		}else{
			$('.title1').text('');
		}
		//密码验证
		var reg2=/^[0-9a-zA-Z]{6,12}/;
		if (!reg2.test($('#ipt2').val())) {
			$('.title2').text('密码长度必须在6-12个字符之间');
			return false;
		}else{
			$('.title2').text('');
		}
		if ($('#ipt3').val()!=$('#ipt2').val()) {
			$('.title3').text('请再输一次密码');
			return false;
		}else{
			$('.title3').text('');
		}
		// 真实姓名验证，假设真实姓名与用户名一样
		if ($('#ipt4').val()!=$('#ipt1').val()) {
			$('.title4').text('非真实姓名学校管理员将停用账号');
			return false;
		}else{
			$('.title4').text('');
		}
		// 身份证号码验证
		var reg3=/(^\d{15})|(^\d{18})|(^\d{17}(\d|x|X)$)/;
		if (!reg3.test($('#ipt5').val())){
			$('.title5').text('请填写真实身份证号码');
			return false;
		}else{
			$('.title5').text('');
		}
		// 性别选择验证
		
		if (!$(".n1").prop("checked")&&!$(".n2").prop("checked")){
			$('.title6').text('请选择性别');
			return false;
		}else{
			$('.title6').text('');
		}

		//下拉框验证
		
		if($('#ipt10').val()==$('.op1').text()){
			$('.title7').text('请选择您的生日');
			return false;
		}else{
			$('.title7').text('');
		}

		// 电子邮箱验证
		var reg4=/^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[a-zA-Z]{2,4}$/
		if (!reg4.test($("#ipt11").val())){
			$('.title8').text('请输入有效的电子邮箱地址');
			return false;
		}else{
			$('.title8').text('');
		}
		
	});


	$(".anniu>span").click(function() {
		$(this).attr("class","bg").siblings().attr("class","hui");
	})
});