//表单验证

$("#loginform").validate({
	rules:{
		username:{
			required:true,
			minlength:4
		},
		password:{
			required:true,
			minlength:6
		},
		yzm:{
			required:true,
			minlength:4
		}
	},
	messages:{
		username:{
			required:'用户名必填',
			minlength:'不能少于4个字符'
		},
		password:{
			required:'密码不能为空',
			minlength:'不能少于6个字符'
		},
		yzm:{
			required:'验证码不能为空',
			minlength:"验证码错误"
		}
	}
});
var flag=true;
$(".yzmpic").click(function(){
	if($(this).attr("src")=="img/code_img.png"){
		$(this).attr("src","img/code_img1.png");
	}else{
		$(this).attr("src","img/code_img.png");
	}
});